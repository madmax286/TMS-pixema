import React from "react";
import { useNavigate } from "react-router-dom";
import "./username.css";

const Username = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  return (
    <div className="username">
      {token ? (
        <>
          <span>Maxim</span>
          <button
            onClick={() => {
              sessionStorage.removeItem("token");
              navigate("/games/home");
            }}
          >
            Log Out
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            navigate("/signin");
          }}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default Username;
