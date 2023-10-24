import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_SELECTED_GAME } from '../../actions/actions';
import { ReactComponent as TrendsIcon } from "../../icons/Trends.svg";
import { ReactComponent as Bookmark } from "../../icons/Bookmark.svg";
import { IGame } from '../../interfaces';
import './gameCard.css'

const GameCard: FC<IGame> = ({background_image, name, rating, slug, id, genres}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const ratingTop = useSelector(({rating}) => rating)
  
  const bookmark = () => {
    let arr = []
    for (let i = 0; i < localStorage.length; i++) arr.push(localStorage.key(i))
    return arr.includes(`${id}`)
  }

  return (
    <div className="game__card">
      <img
        onClick={() => {
          dispatch(GET_SELECTED_GAME(id, slug, navigate));
        }}
        className="game__poster"
        src={background_image}
        alt={name}
      />
      <h4 className={`game__card-rating ${rating > 4 ? ratingTop : ""}`}>
        {rating > 4 ? <TrendsIcon className="trends-icon" /> : ""}
        {rating}
      </h4>
      {bookmark() && (
        <div
          onClick={() => {
            localStorage.removeItem(`${id}`);
            window.location.reload() 
          }}
          className={`added-to-favorites`}
        >
          <Bookmark />
        </div>
      )}
      <div className="game__card-description">
        <h3>{name}</h3>
        <div className="game__card-genres">
          {genres.length ?
            genres.map((e: any, id: number) => <span key={id}>{e.name}</span>) : ''}
        </div>
      </div>
    </div>
  );
}

export default GameCard
