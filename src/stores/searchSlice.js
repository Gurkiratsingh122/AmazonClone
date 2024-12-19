import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: '',
};

 const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchResults: (state, action) => {
      // const existingItem = state.searchData.find(
      //   (item) => item.id === action.payload.id
      // );
      // if(!existingItem){
        // state.searchData = action.payload;
      // }
            console.log(JSON.parse(JSON.stringify(state.searchData)))

      
    },
    
  },
});

export const { searchResults } = searchSlice.actions;
export default searchSlice.reducer;

   //     AddToCart: (state, action) => {
    //         const cartItem = {
    //               id: nanoid(),
    //               data: action.payload
    //         }
    //         state.cartData.push(cartItem)
    //         console.log(state.cartData)
    //     },
    //     removeFromCart :(state, action)=>{
    //         state.cartData = state.cartData.filter((data)=> data.id !== action.payload )}
    // }