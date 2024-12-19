import {configureStore} from "@reduxjs/toolkit"
import cartreducer from "./cartSlice"
import orderreducer from "./ordersSlice"
import authreducer from './authSlice'
import navreducer from './navSlice'
import detailreducer from './productDetail'

export const store = configureStore({
    reducer : {
        cart : cartreducer,
        order : orderreducer,
        auth : authreducer,
        details : detailreducer,
        nav : navreducer,
    }
})
