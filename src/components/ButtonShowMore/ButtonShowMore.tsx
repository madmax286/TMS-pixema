import { useSelector } from "react-redux";
import "./buttonShowMore.css";

const ButtonShowMore = ({ onClick}: any) => {
  const isLoadingSpinner = useSelector(({isLoadingSpinner}) => isLoadingSpinner)

  return (
    <div className="btn-container">
      <button onClick={onClick} className="btn_show-more" type="button">
        <span className="btn-text">Show more</span>
        {isLoadingSpinner ? <span className="loader"></span> : ''}
      </button>
    </div>
  );
};

export default ButtonShowMore;
