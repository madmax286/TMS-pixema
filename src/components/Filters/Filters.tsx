import React, { FC, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
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
  
  useOnClickOutside(node, () => {
    setOpen(false);
    dispatch({ type: "SET_OPEN_FILTER", payload: false }); 
  });

  const showFilter = () => {
    navigate(`/games/filter`);
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
          <button className="btn-rating" type="button">
            Rating
          </button>
          <button className="btn-year" type="button">
            Year
          </button>
        </div>

        <span>Full or short game name</span>
        <div className="input-name">
          <input type="text" placeholder="Your text" />
        </div>

        <span>Genre</span>
        <div className="selector">
          <select name="" id="">
            <option value="">Select Genre</option>
          </select>
        </div>

        <span>Years</span>
        <div className="input-year">
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
        </div>

        <span>Rating</span>
        <div className="input-year">
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
        </div>

        <span>Country</span>
        <div className="selector">
          <select name="" id="">
            <option value="">Select Country</option>
          </select>
        </div>

        <div className="btn-confirm">
          <button className="btn-clear" type="button">
            Clear filter
          </button>
          <button onClick={showFilter} className="btn-results" type="button">
            Show results
          </button>
        </div>
      </StyledFilter>
      <div className={`${open ? "" : "blackout"}`}></div>
    </div>
  );
};

export default Filters;
