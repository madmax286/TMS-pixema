import React, { useEffect, useState } from "react";
import {Route, Routes, useNavigate, useLocation, Navigate} from "react-router-dom";
import { Home, Trends, Favorites, Settings, SelectedGame, SearchResults, FilterPage, SignIn, SignUp, ErrorPage, Media } from "./pages";

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
          <Route path="/game/:id/:slug/media" element={<Media />} />
          <Route path="/games/search/" element={<SearchResults />} />
          <Route path="/games/filter" element={<FilterPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/error" element={<ErrorPage />} /> */}
        </Routes>
        {location.pathname === "/" && <Navigate to="games/home" />}
      </>
    </div>
  );
}

export default App;

