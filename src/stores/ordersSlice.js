import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 ordersData : []
};

 const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    orderResults: (state, action) => {  
        state.ordersData = action.payload;
            console.log(JSON.parse(JSON.stringify(state.ordersData)))

      
    },
    
  },
});

export const { orderResults } = orderSlice.actions;
export default orderSlice.reducer;

 