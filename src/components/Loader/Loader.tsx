import React from "react";
import "./style.css";

const Loader = () => {
  return (
    // <div className="spinner-container">
    //   <div className="spinner">
    //     <div className="spinner-inner"></div>
    //     <div className="spinner-text"></div>
    //   </div>
    // </div>
    <div className="loader-container">
      <span className="loader-skeleton"></span>
      <span className="loader-skeleton"></span>
      <span className="loader-skeleton"></span>
      <span className="loader-skeleton"></span>
      <span className="loader-skeleton"></span>
      <span className="loader-skeleton"></span>
      <span className="loader-skeleton"></span>
      <span className="loader-skeleton"></span>
      <span className="loader-skeleton"></span>
      <span className="loader-skeleton"></span>
      <span className="loader-skeleton"></span>
      <span className="loader-skeleton"></span>
    </div>
  );
};

export default Loader;
