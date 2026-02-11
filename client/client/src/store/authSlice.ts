import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from 'jwt-decode';
import type { JwtPayload } from "jwt-decode";

export interface DecodedToken extends JwtPayload {
    sub: string;
    roles: string[];
    exp: number;
    iat: number;
}

interface LoginResponse {
    accessToken: string;
}

interface AuthState {
    accessToken: string | null;
    user: DecodedToken | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}


function decodeToken(token: string): DecodedToken {
    return jwtDecode<DecodedToken>(token);
}

function decodeUserFromToken(token: string): DecodedToken | null {
    try {
        const claims = decodeToken(token);
        const roles = claims.roles;
        return {
            sub: claims.sub ?? null,
            roles: Array.isArray(roles) ? roles : [roles],
            exp: claims.exp,
            iat: claims.iat
        };
    }
    catch {
        return null;
    }
}

const persistedAccess = localStorage.getItem('access_token') || null;
const initialUser = persistedAccess ? decodeUserFromToken(persistedAccess) : null;

const initialState: AuthState = {
    status: 'idle',
    error: null,
    accessToken: persistedAccess,
    user: initialUser,
}

export const login = createAsyncThunk<LoginResponse, { username: string; password: string }, {rejectValue: string}>(
    'auth/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const res = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                return rejectWithValue(err.message || 'Invalid credentials');
            }

            const data = await res.json().catch(() => ({}));
            const accessToken = data?.accessToken || data?.token;
            if (!accessToken) {
                return rejectWithValue('No access token returned from server');
            }
            localStorage.setItem("token", accessToken);
            return { accessToken };
        }
        catch {
            return rejectWithValue('Network error while logging in');
        }
    }
);


export const logout = createAsyncThunk('auth/logout', async () => {
    await fetch('http://localhost:8080/auth/logout', {
        method: 'POST',
        credentials: 'include',
    }).catch(() => { });
    localStorage.removeItem("token");
    return true;
});


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                state.accessToken = action.payload.accessToken;
                state.user = decodeUserFromToken(action.payload.accessToken);
                localStorage.setItem('access_token', state.accessToken);
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Login failed';
                state.accessToken = null;
                state.user = null;
                localStorage.removeItem('access_token');
            })

            .addCase(logout.fulfilled, (state) => {
                state.status = 'idle';
                state.error = null;
                state.accessToken = null;
                state.user = null;
                localStorage.removeItem('access_token');
            });
    },
});

export default authSlice;
