import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Route, Routes, useNavigate, useLocation, Navigate} from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Home, Trends, Favorites, Settings, SelectedGame, SearchResults, FilterPage } from "./pages";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <>
        <Routes>
          <Route path="/games/home" element={<Home />} />
          <Route path="/games/trends" element={<Trends />} />
          <Route path="/games/favorites" element={<Favorites />} />
          <Route path="/games/settings" element={<Settings />} />
          <Route path="/game/:id/:slug" element={<SelectedGame />} />
          <Route path="/games/search/" element={<SearchResults />} />
          <Route path="/games/filter" element={<FilterPage />} />

        </Routes>
        {location.pathname === "/" && <Navigate to="games/home" />}
      </>
    </div>
  );
}

export default App;
