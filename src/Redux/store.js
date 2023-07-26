import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducers/cart";

export default configureStore({
  reducer: {
    cart: cartReducer
  }
})