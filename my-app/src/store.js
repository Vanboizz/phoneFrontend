import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./components/feature/products/productsSlice";
import userReducer from "./components/feature/user/userSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
  },
});

export default store;
