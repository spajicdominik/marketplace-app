import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { NewPostType } from "../types/NewPost";

type NewPostState = {
    title?: string,
    description?: string,
    price?: string,
    currency?: string,
    user_id?: number,
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
    postalCode?: string;
    sendNewPost?: NewPostType;
}

const initialState: NewPostState = {
    title: undefined,
    description: undefined,
    price: undefined,
    currency: undefined,
    user_id: 1,
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
    postalCode: undefined,
    sendNewPost: undefined
};

const newPostSlice = createSlice({
    name: "newPost",
    initialState: initialState,
    reducers: {
        setNewPost(state, action: PayloadAction<NewPostType | undefined>) {
            state.sendNewPost = action.payload
        },
        setTitle(state, action: PayloadAction<string | undefined>) {
            state.title = action.payload
        },
        setDescription(state, action: PayloadAction<string | undefined>) {
            state.description = action.payload
        },
        setPrice(state, action: PayloadAction<string | undefined>) {
            state.price = action.payload
        },
        setCurrency(state, action: PayloadAction<string | undefined>) {
            state.currency = action.payload
        },
        setUserId(state, action: PayloadAction<number | undefined>) {
            state.user_id = action.payload
        },
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

        setPostalCode(state, action: PayloadAction<string | undefined>) {
            state.postalCode = action.payload;
        },
    }
})

export const newPostActions = newPostSlice.actions;
export default newPostSlice;
