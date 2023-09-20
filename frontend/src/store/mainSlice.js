/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        menuPage: 1,
    },
    reducers: {
        setMenu: (state, action) => {
            state.menuPage = action.payload;
        },
    },
});

export const { setMenu } = mainSlice.actions;
export const selectMenuPage = (state) => state.main.menuPage;

export default mainSlice.reducer;
