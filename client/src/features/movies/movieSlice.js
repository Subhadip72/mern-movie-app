import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  favMovies: [],
};

export const getAllMovies = createAsyncThunk(
  "movie/getAllMovies",
  async (_, thunkAPI) => {
    try {
      const resp = await axios("/movies/getMovies", {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Could not fetch data!");
    }
  }
);

export const addToFavorites = createAsyncThunk(
  "movie/addToFavs",
  async (movie, thunkAPI) => {
    try {
      const resp = await axios.post("/movies/addToFav", movie, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Something went wrong!");
    }
  }
);

export const deleteMovie = createAsyncThunk(
  "/movies/deleteMovie",
  async (movieId, thunkAPI) => {
    try {
      const resp = await axios.delete(`/movies/deleteMovie/${movieId}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp;
    } catch (error) {
      thunkAPI.rejectWithValue("Cannot delete movie!");
      console.log(error);
    }
  }
);

const movieSlice = createSlice({
  name: "FavMovies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addToFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success("Added to Favorites!");
      })
      .addCase(addToFavorites.rejected, (state) => {
        state.isLoading = false;
        toast.error("Could not add to favorites!");
      })
      .addCase(getAllMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllMovies.fulfilled, (state, { payload }) => {
        state.favMovies = payload;
        state.isLoading = false;
      })
      .addCase(getAllMovies.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMovie.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Movie deleted!");
      })
      .addCase(deleteMovie.rejected, (state) => {
        state.isLoading = false;
        toast.error(`couldn't delete the movie!`);
      });
  },
});

export default movieSlice.reducer;
