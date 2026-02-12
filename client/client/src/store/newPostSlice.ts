import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type NewPostState = {
    categoryId?: number;
    subcategoryId?: number;
    productTypeId?: number;
    brandId?: number;
    productId?: number;
    countryId?: number;
    countyId?: number;
    cityId?: number;
    addressLine1?: string;
    addressLine2?: string;
    postalCode?: number
}

const initialState: NewPostState = {
    categoryId: undefined,
    subcategoryId: undefined,
    productTypeId: undefined,
    brandId: undefined,
    productId: undefined,
    countryId: undefined,
    countyId: undefined,
    cityId: undefined,
    addressLine1: undefined,
    addressLine2: undefined,
    postalCode: undefined
};

const newPostSlice = createSlice({
    name: "newPost",
    initialState: initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number | undefined>) {
            state.categoryId = action.payload;
            state.subcategoryId = undefined;
            state.productTypeId = undefined;
            state.brandId = undefined;
            state.productId = undefined;

        },
        setSubcategoryId(state, action: PayloadAction<number | undefined>) {
            state.subcategoryId = action.payload;
            state.productTypeId = undefined;
            state.brandId = undefined;
            state.productId = undefined;

        },
        setProductTypeId(state, action: PayloadAction<number | undefined>) {
            state.productTypeId = action.payload;
            state.brandId = undefined;
            state.productId = undefined;
        },
        setBrandId(state, action: PayloadAction<number | undefined>) {
            state.brandId = action.payload;
            state.productId = undefined;
        },
        setProductId(state, action: PayloadAction<number | undefined>) {
            state.productId = action.payload;
        },
        setCountryId(state, action: PayloadAction<number | undefined>) {
            state.countryId = action.payload;
            state.countyId = undefined;
            state.cityId = undefined;
        },

        setCountyId(state, action: PayloadAction<number | undefined>) {
            state.countyId = action.payload;
            state.cityId = undefined;
        },

        setCityId(state, action: PayloadAction<number | undefined>) {
            state.cityId = action.payload;
        },

        setAddressLine1(state, action: PayloadAction<string | undefined>) {
            state.addressLine1 = action.payload;
        },

        setAddressLine2(state, action: PayloadAction<string | undefined>) {
            state.addressLine2 = action.payload;
        },

        setPostalCode(state, action: PayloadAction<number | undefined>) {
            state.postalCode = action.payload;
        },
    }
})

export const newPostActions = newPostSlice.actions;
export default newPostSlice;
