import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import movieSlice from "./features/movies/movieSlice";
import reviewSlice from "./features/reviews/reviewSlice";
import { tmdbApi } from "./features/services";

export const store = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    reviews: reviewSlice,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(tmdbApi.middleware),
});
