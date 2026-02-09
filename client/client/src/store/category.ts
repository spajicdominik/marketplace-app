import { createSlice } from '@reduxjs/toolkit';

const initialCategoryState = { categoryId: 1};

const categorySlice = createSlice({
    name: 'category',
    initialState: initialCategoryState,
    reducers: {
        setCategory(state, action) {
            state.categoryId = action.payload;
        }
    }
})

export const categoryActions = categorySlice.actions;
export default categorySlice;