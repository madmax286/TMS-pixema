import React, { useState } from "react";
import LogoIcon from "../../assets/Logo.svg";
import MenuLink from "../MenuLink/MenuLink";
import "./menu.css";

const Menu = () => {
  const token = sessionStorage.getItem("token");

  return (
    <aside className="menu__wrapper">
      <div className="menu__logo">
        <img src={LogoIcon} alt="pixema" />
      </div>
      <MenuLink text="Home" />
      <MenuLink text="Trends" />
      {token &&<MenuLink text="Favorites" />}
      <MenuLink text="Settings" />
      <span className="rights-reserved">© All Rights Reserved</span>
    </aside>
  );
};

export default Menu;
