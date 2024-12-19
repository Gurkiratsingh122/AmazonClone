import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    category: ''
};
const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setNav: (state, action) => {
            state.category = action.payload
            // console.log(JSON.parse(JSON.stringify(state.category)))
        },
    },
});

export const { setNav } = navSlice.actions;
export default navSlice.reducer;