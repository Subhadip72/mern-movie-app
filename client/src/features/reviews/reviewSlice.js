import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  reviews: [],
  userReviews: [],
};

export const getAllReviews = createAsyncThunk(
  "reviews/getAllReviews",
  async (_, thunkAPI) => {
    try {
      const resp = await axios("/reviews/getAllReviews", {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("something went wrong!");
      console.log(error);
    }
  }
);

export const getUserReviews = createAsyncThunk(
  "/reviews/getUserReviews",
  async (_, thunkAPI) => {
    try {
      const resp = await axios("/reviews/getMyReviews", {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("something went wrong!");
      console.log(error);
    }
  }
);

export const postReview = createAsyncThunk(
  "reviews/postReview",
  async (review, thunkAPI) => {
    try {
      const resp = await axios.post("/reviews/postReview", review, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("something went wrong!");
      console.log(error);
    }
  }
);

export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (reviewId, thunkAPI) => {
    try {
      const resp = await axios.delete(`/reviews/deleteReview/${reviewId}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp;
    } catch (error) {
      thunkAPI.rejectWithValue("something went wrong!");
      console.log(error);
    }
  }
);

export const editReview = createAsyncThunk(
  "reviews/editReview",
  async ({ review, reviewId }, thunkAPI) => {
    try {
      const resp = await axios.patch(
        `/reviews/editReview/${reviewId}`,
        review,
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          },
        }
      );
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue(`Couldn't edit the review!`);
      console.log(error);
    }
  }
);

const reviewSlice = createSlice({
  name: "ReviewSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllReviews.fulfilled, (state, { payload }) => {
        state.reviews = payload;
        state.isLoading = false;
      })
      .addCase(getAllReviews.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserReviews.fulfilled, (state, { payload }) => {
        state.userReviews = payload;
        state.isLoading = false;
      })
      .addCase(getUserReviews.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postReview.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Review posted successfully!");
      })
      .addCase(postReview.rejected, (state) => {
        state.isLoading = false;
        toast.error("Something went wrong!");
      })
      .addCase(deleteReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteReview.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Review removed!!");
      })
      .addCase(deleteReview.rejected, (state) => {
        state.isLoading = false;
        toast.error("Something went wrong!");
      })
      .addCase(editReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editReview.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Review edited successfully!");
      })
      .addCase(editReview.rejected, (state) => {
        state.isLoading = false;
        toast.error("Something went wrong!");
      });
  },
});

export default reviewSlice.reducer;
