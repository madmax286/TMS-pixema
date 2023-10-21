import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_MOVIES } from '../../actions/actions';
import { IMovie } from '../../interfaces';
import { MovieCard, PageTemplate } from "..";
import "./moviesList.css";

const MoviesList = () => {
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    const movies = useSelector(({ movies }) => movies);
  
    useEffect(() => {
      if (!movies.length) {
        dispatch(GET_MOVIES());
      }
    }, []);
  
  return (
    <div>
      <PageTemplate>
        <div className="movies-layout">
          <div className="movies-list">
            {movies.length &&
              movies.map(({ Title, Year, imdbID, Type, Poster }: IMovie) => (
                <MovieCard
                  key={imdbID}
                  imdbID={imdbID}
                  Title={Title}
                  Year={Year}
                  Type={Type}
                  Poster={Poster}
                />
              ))}
          </div>
          <button className='btn-show_more' type='button'>Show more</button>
        </div>
      </PageTemplate>
    </div>
  );
}

export default MoviesList
