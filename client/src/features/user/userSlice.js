import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await axios.post("/auth/register", user);
      return resp.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue("Failed to register!");
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await axios.post("/auth/login", user);
      return resp.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue("Failed to login!");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Registered succesfully!");
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        toast.success("Something went wrong!");
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        addUserToLocalStorage(payload);
        toast.success("Logged in succesfully!");
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        toast.success("Something went wrong!");
      });
  },
});

export const { setLoading, toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
