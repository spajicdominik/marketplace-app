import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type NewPostState = {
    categoryId? : number;
    subcategoryId? : number;
    productTypeId? : number;
    productId? : number;
}

const initialState: NewPostState = {
  categoryId: undefined,
  subcategoryId: undefined,
  productTypeId: undefined,
  productId: undefined
};

const newPostSlice = createSlice({
    name: "newPost",
    initialState: initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number | undefined>){
            state.categoryId = action.payload;
        },
        setSubcategoryId(state, action: PayloadAction<number | undefined>){
            state.subcategoryId = action.payload;
        },
        setProductTypeId(state, action: PayloadAction<number | undefined>){
            state.productTypeId = action.payload;
        },
        setProductId(state, action: PayloadAction<number | undefined>){
            state.productId = action.payload;
        }
    }
})

export const newPostActions = newPostSlice.actions;
export default newPostSlice;
