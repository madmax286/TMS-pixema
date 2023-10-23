import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ReactComponent as HomeIcon } from "../../icons/Home.svg";
import { ReactComponent as TrendsIcon } from "../../icons/Trends.svg";
import { ReactComponent as FavoritesIcon } from "../../icons/Favorites.svg";
import { ReactComponent as SettingsIcon } from "../../icons/Settings.svg";
import "./menuLink.css";

const MenuLink = ({ text }: { text: string }) => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  const activeMenu = useSelector(({ activeMenu }) => activeMenu);

  return (
    <nav
      onClick={() => {
        navigate(`${`/games/${text.toLocaleLowerCase()}`}`);
        dispatch({ type: "SET_ACTIVE_MENU", payload: text });
      }}
      className={`menu__link menu__home ${activeMenu === text ? "active" : ""}`}
    >
      {text === "Home" ? (
        <HomeIcon />
      ) : text === "Trends" ? (
        <TrendsIcon />
      ) : text === "Favorites" ? (
        <FavoritesIcon />
      ) : text === "Settings" ? (
        <SettingsIcon />
      ) : (
        ""
      )}
      <span>{text}</span>
    </nav>
  );
};

export default MenuLink;
