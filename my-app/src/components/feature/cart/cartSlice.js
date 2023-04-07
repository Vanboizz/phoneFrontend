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
  async ({ idproducts, idsize, idcolor, accessToken }, thunkAPI) => {
    try {
      return cartService.addCart(idproducts, idsize, idcolor, accessToken);
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

export const deleteCart = createAsyncThunk(
  "/deletecart",
  async ({ idsize, idcolor, accessToken }, thunkAPI) => {
    try {
      return cartService.deleteCart(idsize, idcolor, accessToken);
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
        state.error = true;
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
        state.totalPriceCart = state.cart.reduce(
          (prev, curr) =>
            prev +
            curr.quantity * ((curr.size[0].pricesize * curr.discount) / 100),
          0
        );
      })
      .addCase(getCart.rejected, (state) => {
        state.error = true;
      })
      //delete cart
      .addCase(deleteCart.pending, (state) => {
        state.success = false;
        state.error = false;
        state.message = "";
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.cart = state.cart.filter(
          (value) =>
            value.size[0].color[0].idcolor !==
            action.payload.size[0].color[0].idcolor
        );
        state.success = true;
      })
      .addCase(deleteCart.rejected, (state) => {
        state.error = true;
      });
  },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
