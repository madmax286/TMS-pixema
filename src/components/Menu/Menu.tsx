import React, { useState } from "react";
import LogoIcon from "../../assets/Logo.svg";
import MenuLink from "../MenuLink/MenuLink";
import { token } from "../../key";
import { useNavigate } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  // const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <aside className="menu__wrapper">
      <div
        onClick={() => {
          navigate("/games/home");
        }}
        className="menu__logo"
      >
        <img src={LogoIcon} alt="pixema" />
      </div>
      <MenuLink text="Home" />
      <MenuLink text="Trends" />
      {token && <MenuLink text="Favorites" />}
      {/* <MenuLink text="Favorites" /> */}
      <MenuLink text="Settings" />
      <span className="rights-reserved">
        <span>© All Rights Reserved</span> <br /> 
        <span>Created by</span> <br />
        <span>Maxim Kurhun</span>
        </span>
    </aside>
  );
};

export default Menu;
