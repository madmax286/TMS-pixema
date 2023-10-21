import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_MOVIES } from '../../actions/actions';
import { IMovie } from '../../interfaces';
import { Movie, PageTemplate } from "../../components";
import "./moviesList.css";

const MoviesList = () => {
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    const movies = useSelector(({ movies }) => movies);
  
    useEffect(() => {
      if (!movies.length) {
        dispatch(GET_MOVIES());
      }
    }, []);
  
    console.log(movies);
  
  return (
    <div>
      <PageTemplate>
        <div className="movies-list">
          {movies.length &&
            movies.map(({ Title, Year, imdbID, Type, Poster }: IMovie) => (
              <Movie
                key={imdbID}
                imdbID={imdbID}
                Title={Title}
                Year={Year}
                Type={Type}
                Poster={Poster}
              />
            ))}          
        </div>
        {/* <button>Show more</button> */}
      </PageTemplate>
    </div>
  );
}

export default MoviesList
