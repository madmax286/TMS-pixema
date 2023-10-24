import React from "react";
import "./buttonShowMore.css";

const ButtonShowMore = ({onClick}: any) => {
  return (
    <button onClick={onClick} className="btn_show-more" type="button">
      Show more
    </button>
  );
};

export default ButtonShowMore;
