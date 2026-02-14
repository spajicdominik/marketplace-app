import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { isTokenExpired, logout } from "../store/authSlice";
import { useEffect } from "react";
import type { AppDispatch } from "../store";

export const ProtectedRoute = () => {
const token = useSelector((state : RootState ) => state.auth.accessToken);
const dispatch = useDispatch<AppDispatch>();
const expired = isTokenExpired(token);

useEffect(() => {
    if (token && expired) {
        void dispatch(logout());
    }
}, [token, expired, dispatch]);

if (!token || expired) {
    return <Navigate to="/auth?mode=login"/>;
}
return <Outlet/>
}
