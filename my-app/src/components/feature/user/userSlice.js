import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  user: {},
  isError: false,
  success: false,
  isLoading: false,
  message: "",
};

export const registerUser = createAsyncThunk(
  "/register",
  async ({ fullname, email, password }, thunkAPI) => {
    try {
      return userService.registerUser({ fullname, email, password });
    } catch (error) {
      const message =
        (error.respone && error.respone.data && error.respone.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.success = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.success = true;
        state.isLoading = false;
        state.user = action.payload;
        state.message = "";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
        state.success = false;
        state.message = "Dont register";
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
