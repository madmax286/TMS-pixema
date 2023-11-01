import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Usericon } from "../../assets/user.svg";
import { user } from "../../key";
import "./username.css";

const Username = () => {
  const navigate = useNavigate();
  const [onClickUser, setOnClickUser] = useState(false)  
  const token = sessionStorage.getItem("token");
  const firstName = user().firstName;
  const lastName = user().lastName;
  const firstSymbol = firstName.length > 0 && firstName[0].toUpperCase();
  const lastSymbol = lastName.length > 0 && lastName[0].toUpperCase();  

  const onToggleUserName = () => {
    if (token) setOnClickUser(onClickUser => !onClickUser)
    else navigate("/signin");
  };

  const editProfile = () => {
    navigate("/games/settings");
  };

  const logOut = () => {
    sessionStorage.removeItem("token");
    window.location.reload()
  };

  return (
    <div onClick={onToggleUserName} className="username">
      <div className="symbol-name">
        {token ? (
          <span>
            {firstSymbol}
            {lastSymbol}
          </span>
        ) : (
          <Usericon />
        )}
      </div>
      {token ? (
        <div className="full-name">
          <span className="first-name">{firstName}</span>
          <span>{lastName}</span>
        </div>
      ) : (
        <span>Sign in</span>
      )}
      {onClickUser ?
      <div className={`username-menu ${onClickUser ? 'active' : ''}`}>
        <div onClick={editProfile} className="username-menu__edit">
          <span>Edit Profile</span>
        </div>
        <div onClick={logOut} className="username-menu__log-out">
          <span>Log Out</span>
        </div>
      </div>
      : ''
      }
      <div className="arrow-container">
        <div className={`arrow ${onClickUser ? 'rotate-arrow' : ''}`}></div>
      </div>
    </div>
  );
};

export default Username;
