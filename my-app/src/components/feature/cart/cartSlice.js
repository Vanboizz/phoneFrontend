import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "./cartService";

const initialState = {
  cart: [],
  quantityCart: 0,
  totalPriceCart: 0,
  success: false,
  error: false,
  message: "",
};

export const addCart = createAsyncThunk(
  "/addcart",
  async ({ idproducts, accessToken }, thunkAPI) => {
    try {
      return cartService.addCart(idproducts, accessToken);
    } catch (error) {
      const message =
        (error.respone && error.respone.data && error.respone.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getCart = createAsyncThunk(
  "/getcart",
  async ({ accessToken }, thunkAPI) => {
    try {
      return cartService.getCart(accessToken);
    } catch (error) {
      const message =
        (error.respone && error.respone.data && error.respone.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: (state) => {
      state.success = false;
      state.error = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      //add cart
      .addCase(addCart.pending, (state) => {
        state.success = false;
        state.error = false;
        state.message = "";
      })
      .addCase(addCart.fulfilled, (state, action) => {
        const findResult = state.cart.find(
          (item) => item.idproducts === action.payload.result.idproducts
        );
        if (findResult) {
          findResult.quantity = action.payload.result.quantity;
        } else {
          state.cart.push(action.payload.result);
        }
        state.success = true;
      })
      .addCase(addCart.rejected, (state, action) => {
        state.error = false;
      })
      //get cart
      .addCase(getCart.pending, (state) => {
        state.success = false;
        state.error = false;
        state.message = "";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.success = true;
        state.cart = action.payload;
        state.quantityCart = state.cart.reduce(
          (prev, curr) => prev + curr.quantity,
          0
        );
      })
      .addCase(getCart.rejected, (state) => {
        state.error = true;
      });
  },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
