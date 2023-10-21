import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_SELECTED_MOVIE } from '../../actions/actions';
import { IMovieCard } from '../../interfaces';
import './movieCard.css'

const MovieCard: FC<IMovieCard> = ({Title, Year, imdbID, Type, Poster}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  return (
    <div
      onClick={() => {
        dispatch(GET_SELECTED_MOVIE(imdbID, Type, navigate));
      }}
      className="movie__card"
    >
      <img className="movie__poster" src={Poster} alt={Title} />

      <div className="movie__description">
        <h3>{Title}</h3>
        <h4>{Year}</h4>
      </div>
    </div>
  );
}

export default MovieCard
