import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_SELECTED_GAME } from '../../actions/actions';
import { IGame } from '../../interfaces';
import './gameCard.css'

const GameCard: FC<IGame> = ({background_image, name, rating, slug, id, genres}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  return (
    <div
      onClick={() => {
        dispatch(GET_SELECTED_GAME(id, slug, navigate));
      }}
      className="game__card"
    >
      <img className="game__poster" src={background_image} alt={name} />
      <h4 className='game__card-rating'>{rating}</h4>
      <div className="game__card-description">
        <h3>{name}</h3>
        <div className="game__card-genres">
          {genres.length &&
            genres.map((e: any, id: number) => <span key={id}>{e.name}</span>)}
        </div>
      </div>
    </div>
  );
}

export default GameCard
