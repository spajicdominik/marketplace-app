import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category";
import authSlice from "./authSlice";

const store = configureStore({
    reducer : { 
        category: categorySlice.reducer,
        auth: authSlice.reducer

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;