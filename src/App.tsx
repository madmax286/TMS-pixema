import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Route, Routes, useNavigate, useLocation, Navigate} from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { GamesList, Trends, Favorites, Settings, SelectedGame } from "./components";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <>
        <Routes>
          <Route
            path="/games/home"
            element={<GamesList />}
          />
          <Route
            path="/games/trends"
            element={<Trends />}
          />
          <Route
            path="/games/favorites"
            element={<Favorites />}
          />
          <Route
            path="/games/settings"
            element={<Settings />}
          />
          <Route
            path="/game/:id/:slug"
            element={<SelectedGame />}
          />
        </Routes>
        {location.pathname === "/" && <Navigate to="home" />}
      </>
    </div>
  );
}

export default App;
