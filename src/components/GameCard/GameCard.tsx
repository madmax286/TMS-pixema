import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { GET_SELECTED_GAME } from "../../actions/actions";
import { ReactComponent as TrendsIcon } from "../../assets/Trends.svg";
import { ReactComponent as Bookmark } from "../../assets/Bookmark.svg";
import { IGame } from "../../utils/interfaces";
import { convertDate } from "../../utils/helpers";
import "./gameCard.css";

const GameCard: FC<IGame> = ({
  background_image,
  name,
  rating,
  slug,
  id,
  genres,
  added,
  released,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const ratingTop = useSelector(({ rating }) => rating);
  const token = sessionStorage.getItem("token");

  const bookmark = () => {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) arr.push(localStorage.key(i));
    return arr.includes(`${id}`);
  };
  
  return (
    <div className="game__card">
      <img className="game__poster" src={background_image} alt={name} />
      <h4 className={`game__card-rating ${rating > 4 ? ratingTop : ""}`}>
        {rating > 4 ? <TrendsIcon className="trends-icon" /> : ""}
        {rating}
      </h4>
      {token && bookmark() && (
        <div
          onClick={() => {
            localStorage.removeItem(`${id}`);
            window.location.reload();
          }}
          className={`added-to-favorites`}
        >
          <Bookmark />
        </div>
      )}
      <div className="game__card-description">
        <h1
          onClick={() => {
            dispatch(GET_SELECTED_GAME(id, slug, navigate));
          }}
        >
          {name}
        </h1>
        <div className="game__card-genres">
          {genres.length
            ? genres.map((e: any, id: number) => <span key={id}>{e.name}</span>)
            : ""}
        </div>
        <div className="game__card-about">
          <div className="added-count">
            <h5>Added in libraries:</h5>
            <h5>+{added}</h5>
          </div>
          <div className="realease-date">
            <h5>Release date:</h5>
            <h5>{convertDate(`${released}`)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
