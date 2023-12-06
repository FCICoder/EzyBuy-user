import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'
import productsReducer from "./slices/productsSlice";
import categoryReducer from "./slices/categoriesSlice";
export const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productsReducer,
        category:categoryReducer
    }
})