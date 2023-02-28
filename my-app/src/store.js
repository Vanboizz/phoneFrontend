import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./components/feature/products/productsSlice";

const store = configureStore({
  reducer: {
    products : productsReducer
  },
});

export default store;
