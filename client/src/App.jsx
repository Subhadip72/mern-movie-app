import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  Home,
  Profile,
  Movies,
  TvSeries,
  Reviews,
  Favorites,
  Search,
  CastDetails,
  SingleMovie,
  SingleTvSeries,
  Error,
  EditReview,
} from "./pages";
import { Footer } from "./components";
import SharedLayout from "./components/SharedLayout";
import ProtectedRoute from "./pages/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

axios.defaults.baseURL = "https://mern-movie-app-liart.vercel.app/api/v1";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="/cast/:id" element={<CastDetails />} />
          <Route path="/tvseries" element={<TvSeries />} />
          <Route path="/tvSeries/:id" element={<SingleTvSeries />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:id" element={<EditReview />} />
          <Route path="/favourites" element={<Favorites />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
