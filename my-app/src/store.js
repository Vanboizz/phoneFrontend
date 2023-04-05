import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./components/feature/products/productsSlice";
import userReducer from "./components/feature/user/userSlice";
import cartReducer from "./components/feature/cart/cartSlice"

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    cart : cartReducer
  },
});

export default store;
