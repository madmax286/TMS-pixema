import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Route, Routes, useNavigate, useLocation, Navigate} from "react-router-dom";
import { MoviesList } from "./components";

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
          {/* <Route
            path="/trends"
            element={<MoviestList />}
          />
          <Route
            path="/favorites"
            element={<MoviestList />}
          />
          <Route
            path="/settings"
            element={<MoviestList />}
          />
          <Route
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
