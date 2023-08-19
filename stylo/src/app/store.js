import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../faetures/cart/CartSlice'
import productReducer from '../faetures/ProductSlice'

const store=configureStore({
    reducer:{
        cart:cartReducer,
        products:productReducer,
    }
})

export default store