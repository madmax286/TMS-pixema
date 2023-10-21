import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Route, Routes, useNavigate, useLocation, Navigate} from "react-router-dom";
import { MoviesList, Trends, Favorites, Settings, SelectedMovie } from "./components";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <>
        <Routes>
          <Route
            path="/home"
            element={<MoviesList />}
          />
          <Route
            path="/trends"
            element={<Trends />}
          />
          <Route
            path="/favorites"
            element={<Favorites />}
          />
          <Route
            path="/settings"
            element={<Settings />}
          />
          <Route
            path="/:Type/:imdbID"
            // path="/movie"
            element={<SelectedMovie />}
          />

          {/* <Route
            path="/signin"
            element={<MoviestList />}
          /> */}
        </Routes>
        {location.pathname === "/" && <Navigate to="home" />}
      </>
    </div>
  );
}

export default App;
