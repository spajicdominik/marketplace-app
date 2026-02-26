import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category";
import authSlice from "./authSlice";
import newPostSlice from "./newPostSlice";
import sidebarSlice from "./sidebarSlice";
import editPostSlice from "./editPostSlice";
import editUserSlice from "./editUserSlice";

const store = configureStore({
    reducer : { 
        category: categorySlice.reducer,
        auth: authSlice.reducer,
        newpost: newPostSlice.reducer,
        sidebar: sidebarSlice.reducer,
        editpost: editPostSlice.reducer,
        edituser: editUserSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;