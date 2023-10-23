import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as HomeIcon } from "../../icons/Home.svg";
import { ReactComponent as TrendsIcon } from "../../icons/Trends.svg";
import { ReactComponent as FavoritesIcon } from "../../icons/Favorites.svg";
import { ReactComponent as SettingsIcon } from "../../icons/Settings.svg";
import LogoIcon from '../../icons/Logo.svg'
import './menu.css'

const Menu = () => {
  const navigate = useNavigate();
  const [activeHome, setActiveHome] = useState(true)  
  const [activeTrends, setActiveTrends] = useState(false)  

  return (
    <aside className="menu__wrapper">
      <div className="menu__logo">
        <img src={LogoIcon} alt="pixema" />
      </div>
      <nav
        onClick={() => {
          setActiveHome((prev) => !prev);
          navigate("/home");
        }}
        className={`menu__link menu__home ${activeHome ? "active" : ""}`}
      >
        <HomeIcon className="home-icon" />
        <span>Home</span>
      </nav>
      <div
        onClick={() => {
          setActiveTrends((prev) => !prev);
          navigate("/trends");
        }}
        className={`menu__link menu__trends ${activeTrends ? "active" : ""}`}
      >
        <TrendsIcon className="trends-icon" />
        <span>Trends</span>
      </div>
      <div
        onClick={() => {
          navigate("/favorites");
        }}
        className="menu__link menu__favorites"
      >
        <FavoritesIcon className="favorites-icon" />
        <span>Favorites</span>
      </div>
      <div
        onClick={() => {
          navigate("/settings");
        }}
        className="menu__link menu__settings"
      >
        <SettingsIcon className="settings-icon" />
        <span>Settings</span>
      </div>
      <span className="rights-reserved">© All Rights Reserved</span>
    </aside>
  );
}

export default Menu
