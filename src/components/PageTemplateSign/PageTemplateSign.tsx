import React, { ReactNode, FC } from "react";
import { useSelector } from "react-redux";
import LogoIcon from "../../assets/Logo.svg";
import Background from "../../assets/Background.jpg";
import "./pageTemplateSign.css";

interface IPageTemplateSign {
  children?: ReactNode;
}

const PageTemplateSign: FC<IPageTemplateSign> = ({ children }) => {
  const isLoading = useSelector(({ isLoading }) => isLoading);

  return (
    <>
      <div className="wrapper__sign">
        <img className="logo-image" src={LogoIcon} alt="" />
        <img className="background-image" src={Background} alt="" />
      </div>
      {children}
    </>
  );
};

export default PageTemplateSign;
