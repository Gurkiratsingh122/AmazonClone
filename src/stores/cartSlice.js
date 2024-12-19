import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  totalPrice : ''
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const existingItem = state.cartData.find(
        (item) => item.id === action.payload.id
      );
      if(existingItem){
        existingItem.quantity += 1 ; 
      } else
        state.cartData.push({...action.payload});
      // console.log(JSON.parse(JSON.stringify(state.cartData)));
      
    },
    removeFromCart: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
      // console.log(state.cartData);
    },
    updateQuantity: (state, action) => {
      const item = state.cartData.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity > 0 ? action.payload.quantity : 1 
      }
    },
    grandTotal: (state,action) =>{
      state.totalPrice= action.payload
      // console.log(state.totalPrice)
    },
    clearCart: (state) =>{
      state.cartData = []
    }
  },
});

export const { AddToCart, removeFromCart, updateQuantity, grandTotal, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

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