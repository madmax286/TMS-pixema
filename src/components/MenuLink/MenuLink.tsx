import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ReactComponent as HomeIcon } from "../../assets/Home.svg";
import { ReactComponent as TrendsIcon } from "../../assets/Trends.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/Favorites.svg";
import { ReactComponent as SettingsIcon } from "../../assets/Settings.svg";
import "./menuLink.css";

const MenuLink = ({ text }: { text: string }) => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  const activeMenu = useSelector(({ activeMenu }) => activeMenu);
  const openFliter = useSelector(({openFliter}) => openFliter)

  return (
    <nav
      onClick={() => {
        dispatch({ type: "SET_ACTIVE_MENU", payload: text });
        navigate(`/games/${text.toLocaleLowerCase()}`);       
      }}
      className={`menu__link menu__home ${(activeMenu === text && !openFliter) ? "active" : ""}`}
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
