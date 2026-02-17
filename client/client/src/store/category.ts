import { createSlice } from '@reduxjs/toolkit';

const initialCategoryState = {
    categoryId: 1,
    subcategoryId: null,
    subcategoryItemId: null,
    productId: null,
    countryId : null,
    countyId : null,
    cityId : null,
    min_price : null,
    max_price : null,
    sortPriceDesc : null,
    sortPriceAsc : null,
    sortDateDesc : null,
    sortDateAsc : null
};

const categorySlice = createSlice({
    name: 'category',
    initialState: initialCategoryState,
    reducers: {
        setCategory(state, action) {
            state.categoryId = action.payload;
            state.subcategoryId = null;
            state.subcategoryItemId = null;
            state.productId = null;
        },
        setSubcategory(state, action) {
            state.subcategoryId = action.payload;
            state.subcategoryItemId = null;
            state.productId = null;
        },
        setSubcategoryItem(state, action) {
            state.subcategoryItemId = action.payload;
            state.productId = null;
        },
        setProduct(state, action) {
            state.productId = action.payload;
        },
        setCountry(state, action) {
            state.countryId = action.payload;
            state.countyId = null;
            state.cityId = null;
        },
        setCounty(state, action) {
            state.countyId = action.payload;
            state.cityId = null;
        },
        setCity(state, action) {
            state.cityId = action.payload;
        },
        setMinPrice(state, action) {
            state.min_price = action.payload;
        },
        setMaxPrice(state, action) {
            state.max_price = action.payload;
        },
        resetPriceRange(state) {
            state.max_price = null;
            state.min_price = null;
        },
        setPriceDesc(state, action) {
            state.sortPriceDesc = action.payload;
            state.sortPriceAsc = null;
            state.sortDateAsc = null;
            state.sortDateDesc = null;
        },
        setPriceAsc(state, action) {
            state.sortPriceDesc = null;
            state.sortPriceAsc = action.payload;
            state.sortDateAsc = null;
            state.sortDateDesc = null;
        },
        setDateDesc(state, action) {
            state.sortPriceDesc = null;
            state.sortPriceAsc = null;
            state.sortDateAsc = null;
            state.sortDateDesc = action.payload;
        },
        setDateAsc(state, action) {
            state.sortPriceDesc = null;
            state.sortPriceAsc = null;
            state.sortDateAsc = action.payload;
            state.sortDateDesc = null;
        },
        resetDescFilters(state) {
            state.sortPriceDesc = null;
            state.sortPriceAsc = null;
            state.sortDateAsc = null;
            state.sortDateDesc = null;
        }
        
        
    }
})

export const categoryActions = categorySlice.actions;
export default categorySlice;