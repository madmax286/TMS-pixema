import { ReactNode, FC } from "react";
import LogoIcon from "../../assets/Logo.svg";
import Background from "../../assets/Background2.jpg";
import { useNavigate } from "react-router-dom";
import { ROUTE_HOME } from "../../utils/routes";
import "./pageTemplateSign.css";

interface IPageTemplateSign {
  children?: ReactNode;
}

const PageTemplateSign: FC<IPageTemplateSign> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <img
        onClick={() => navigate(ROUTE_HOME)}
        className="logo-image"
        src={LogoIcon}
        alt="logo-image"
      />
      <img className="background-image" src={Background} alt="" />
      {children}
    </>
  );
};

export default PageTemplateSign;
