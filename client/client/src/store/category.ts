import { createSlice } from '@reduxjs/toolkit';

const initialCategoryState = {
    categoryId: 1,
    subcategoryId: 0,
    subcategoryItemId: 0,
    productId: 0
};

const categorySlice = createSlice({
    name: 'category',
    initialState: initialCategoryState,
    reducers: {
        setCategory(state, action) {
            state.categoryId = action.payload;
            state.subcategoryId = 0;
            state.subcategoryItemId = 0;
            state.productId = 0;
        },
        setSubcategory(state, action) {
            state.subcategoryId = action.payload;
            state.subcategoryItemId = 0;
            state.productId = 0;
        },
        setSubcategoryItem(state, action) {
            state.subcategoryItemId = action.payload;
            state.productId = 0;
        },
        setProduct(state, action) {
            state.productId = action.payload;
        }
        
    }
})

export const categoryActions = categorySlice.actions;
export default categorySlice;