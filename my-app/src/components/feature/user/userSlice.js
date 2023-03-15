import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const accessToken = localStorage.getItem("accessToken")
  ? localStorage.getItem("accessToken")
  : null;

const initialState = {
  user: null,
  accessToken,
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

export const loginUser = createAsyncThunk(
  "/login",
  async ({ email, password }, thunkAPI) => {
    try {
      return userService.loginUser({ email, password });
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
    //register
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.success = true;
        state.isLoading = false;
        state.message = "Register is successfully";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = "Register is failed";
      })
      //login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.user = action.payload;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Occupied Error";
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
