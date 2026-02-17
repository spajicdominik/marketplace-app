import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    open: false
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: initialState,
    reducers: {
        showDrawer(state) {
            state.open = true;
        },
        onClose(state) {
            state.open = false;
        }
    }
});

export const sidebarActions = sidebarSlice.actions;
export default sidebarSlice;