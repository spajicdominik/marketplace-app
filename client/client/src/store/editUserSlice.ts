import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type EditUserState = {
    firstName?: string;
    lastName?: string;
    gender?: string;
    birthDate?: string;
    phoneNumber?: string;
    countryId?: number;
    countyId?: number;
    cityId?: number;
}

const initialState: EditUserState = {
    firstName: undefined,
    lastName: undefined,
    gender: undefined,
    birthDate: undefined,
    phoneNumber: undefined,
    countryId: undefined,
    countyId: undefined,
    cityId: undefined
}

const editUserSlice = createSlice({
    name: "editUser",
    initialState: initialState,
    reducers: {
        resetEditUser(state, action: PayloadAction<EditUserState | undefined>) {
            return initialState;
        },
        setState(state, action: PayloadAction<EditUserState | undefined>) {
            return { ...action.payload };
        },
        setFirstName(state, action: PayloadAction<string | undefined>) {
            state.firstName = action.payload;
        },
        setLastName(state, action: PayloadAction<string | undefined>) {
            state.lastName = action.payload;
        },
        setGender(state, action: PayloadAction<string | undefined>) {
            state.gender = action.payload;
        },
        setBirthDate(state, action: PayloadAction<string | undefined>) {
            state.birthDate = action.payload;
        },
        setPhoneNumber(state, action: PayloadAction<string | undefined>) {
            state.phoneNumber = action.payload;
        },
        setCountry(state, action: PayloadAction<number | undefined>) {
            state.countryId = action.payload;
        },
        setCounty(state, action: PayloadAction<number | undefined>) {
            state.countyId = action.payload;
        },
        setCity(state, action: PayloadAction<number | undefined>) {
            state.cityId = action.payload;
        },
    }
});

export const editUserActions = editUserSlice.actions;
export default editUserSlice;