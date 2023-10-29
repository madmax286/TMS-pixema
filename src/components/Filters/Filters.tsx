import React, { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { GET_FILTER_RESULTS } from "../../actions/actions";
import { useOnClickOutside } from "../../hooks";
import { StyledFilter, StyledLink, StyledMenuLinks } from "./Filter.styled";
import "./filters.css";

export type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  node: any;
  close: any;
};

const Filters: FC<Props> = ({ open, setOpen, node, close }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const genres = useSelector(({ genres }) => genres);
  const platforms = useSelector(({ platforms }) => platforms);
  const games = useSelector(({ games }) => games);
  
  const [genreID, setGenreID] = useState("");
  const [checkedGenre, setCheckedGenre] = useState("");
  const [checkedPlatform, setCheckedPlatform] = useState("");
  
  const [platformID, setPlatformID] = useState("");
  const [name, setName] = useState("");
  const [dateFrom, setdateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [sortRating, setsortRating] = useState("");
  const [clicked, setClicked] = useState(false);

  useOnClickOutside(node, () => {
    setOpen(false);
    dispatch({ type: "SET_OPEN_FILTER", payload: false }); 
  });

  const showFilterResults = () => {
    navigate(`/games/filter`);
    dispatch({type: 'SET_GENRE_ID', payload: genreID})
    dispatch({type: 'SET_PLATFORM_ID', payload: platformID})
    
    dispatch(GET_FILTER_RESULTS(platformID, genreID, name, dateFrom, dateTo, sortRating))
  };

  return (
    <div>
      <StyledFilter ref={node} open={open}>
        <div className="filter-header">
          <h1>Filters</h1>
          <h1 className="close-btn" onClick={close}>
            X
          </h1>
        </div>

        <span>Sort by</span>
        <div className="btn-sort">
          <button
            onClick={() => {
              setsortRating("rating");
              setClicked((prev) => !prev);
            }}
            className={`${clicked ? "clicked" : ""} btn-rating`}
            type="button"
          >
            Rating
          </button>
          <button className="btn-year" type="button">
            Year
          </button>
        </div>

        <span>Full or short game name</span>
        <div className="input-name">
          <input
            onChange={(e) => setName(e.currentTarget.value)}
            type="search"
            placeholder="Your text"
            value={name}
          />
        </div>

        <span>Genre</span>
        <div className="selector">
          <select
            onChange={(e) => setGenreID(e.currentTarget.value)}
            name=""
            id=""
          >
            <option>Select Genre</option>
            {genres.length &&
              genres.map(({ name, id }: any) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
          </select>
        </div>

        <span>Years</span>
        <div className="input-year">
          <input
            onChange={(e) => setdateFrom(e.currentTarget.value)}
            type="search"
            placeholder="From"
            value={dateFrom}
          />
          <input
            onChange={(e) => setDateTo(e.currentTarget.value)}
            type="search"
            placeholder="To"
            value={dateTo}
          />
        </div>

        <span>Rating</span>
        <div className="input-year">
          <input disabled type="search" placeholder="From" />
          <input disabled type="search" placeholder="To" />
        </div>

        <span>Platforms</span>
        <div className="selector">
          <select
            onChange={(e) => setPlatformID(e.currentTarget.value)}
            name=""
            id=""
          >
            <option>Select Genre</option>
            {platforms.length &&
              platforms.map(({ name, id }: any) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
          </select>
        </div>

        <div className="btn-confirm">
          <button className="btn-clear" type="button">
            Clear filter
          </button>
          <button
            onClick={showFilterResults}
            className="btn-results"
            type="button"
          >
            Show results
          </button>
        </div>
      </StyledFilter>
      <div className={`${open ? "" : "blackout"}`}></div>
    </div>
  );
};

export default Filters;
