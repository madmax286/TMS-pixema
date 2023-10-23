import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../../icons/Logo.svg";
import "./menu.css";
import MenuLink from "../MenuLink/MenuLink";

const Menu = () => {
  return (
    <aside className="menu__wrapper">
      <div className="menu__logo">
        <img src={LogoIcon} alt="pixema" />
      </div>
      <MenuLink text="Home" />
      <MenuLink text="Trends" />
      <MenuLink text="Favorites" />
      <MenuLink text="Settings" />
      <span className="rights-reserved">© All Rights Reserved</span>
    </aside>
  );
};

export default Menu;
