import React, { FC } from 'react'
import { IMovie } from '../../interfaces';
import './movie.css'

const Movie: FC<IMovie> = ({Title, Year, imdbID, Type, Poster}) => {

  return (
    <div className="movie__card">
      <img className="movie__poster" src={Poster} alt="" />

      <div className="movie__description">
        <h3>{Title}</h3>
        <h4>{Year}</h4>
      </div>
    </div>
  );
}

export default Movie
