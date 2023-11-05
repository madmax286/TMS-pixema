import { useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/Logo.svg";
import MenuLink from "../MenuLink/MenuLink";
import { token } from "../../utils/key";
import { ROUTE_HOME } from "../../utils/routes";
import "./menu.css";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <aside className="menu__wrapper">
      <div onClick={() => navigate(ROUTE_HOME)} className="menu__logo">
        <img src={LogoIcon} alt="pixema" />
      </div>
      <MenuLink text="Home" />
      <MenuLink text="Trends" />
      {token && <MenuLink text="Favorites" />}
      <MenuLink text="Settings" />
      <span className="rights-reserved">
        <span>Created by </span>
        <span>Maxim Kurhun</span>
        <br />
        <span>© All Rights Reserved</span>
      </span>
    </aside>
  );
};

export default Menu;
