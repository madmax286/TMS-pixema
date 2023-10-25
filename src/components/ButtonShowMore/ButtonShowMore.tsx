import React from "react";
import { useSelector } from "react-redux";
import "./buttonShowMore.css";

const ButtonShowMore = ({ onClick }: any) => {
  const isLoading = useSelector(({isLoading}) => isLoading)

  return (
    <div className="btn-container">
      <button onClick={onClick} className="btn_show-more" type="button">
        <span className="btn-text">Show more</span> 
      </button>
      {isLoading ? <span className="loader"></span> : ''}
    </div>
  );
};

export default ButtonShowMore;
