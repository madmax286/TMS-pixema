import React, { ReactNode, FC } from 'react'
import { Header, Menu } from "../../components";
import './pageTemplate.css'

interface IPageTemplate {
    children?: ReactNode
}

const PageTemplate: FC<IPageTemplate> = ({ children }) => {
  return (
    <div className="wrapper-container">
      <Menu />
      <Header />
      {children}
    </div>
  );
};

export default PageTemplate
