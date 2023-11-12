import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./components/feature/products/productsSlice";
import { userSlice } from "./components/feature/user/userSlice";
import { cartSlice } from "./components/feature/cart/cartSlice"
import { favoriteSlice } from "./components/feature/favorite/favoriteSlice"
import statisticSlice from "./components/feature/statistic/statisticSlice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    favorite: favoriteSlice.reducer,
    statistic: statisticSlice.reducer,
  },
});

export default store;
