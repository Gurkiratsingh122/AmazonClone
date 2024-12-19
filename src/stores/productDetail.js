import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   
};

 const detailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    productDetails : (state, action) => {
    //   const existingItem = state.searchData.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   if(!existingItem){
        state.ProductData = (action.payload);
    //   }
      // console.log(state.ProductData)

      
      },

    
  },
});

export const { productDetails } = detailsSlice.actions;
export default detailsSlice.reducer;

