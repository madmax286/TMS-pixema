import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_SELECTED_MOVIE } from '../../actions/actions';
import { IMovie } from '../../interfaces';
import PageTemplate from '../PageTemplate/PageTemplate';
import './selectedMovie.css'


const SelectedMovie= () => {
  const { imdbID, Type } = useParams<{ imdbID: string, Type: string }>();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();

  const movie: IMovie[] = useSelector(({ movie }) => movie);

  useEffect(() => {
    if (!movie.length) {
      dispatch(GET_SELECTED_MOVIE(imdbID, Type, navigate));
    }
  }, []);

  return <>
    {(imdbID && Type) &&
    <PageTemplate>
        {movie.length &&
            movie.map(({Title, Year, imdbID, Poster, Released, Runtime, Genre, Director,
            Writer, Actors, Plot, Country, Awards, imdbRating, BoxOffice, Production}: IMovie) => (
                <div key={imdbID} className='selected-movie'>
                    <img src={Poster} alt={Title} />
                    <p>{Title}</p>
                    <p>{Year}</p>
                    <p>{Released}</p>
                    <p>{Runtime}</p>
                    <p>{Writer}</p>
                    <p>{Actors}</p>
                    <p>{Plot}</p>
                    <p>{Country}</p>
                    <p>{Awards}</p>
                    <p>{imdbRating}</p>
                    <p>{BoxOffice}</p>
                    <p>{Genre}</p>
                    <p>{Production}</p>
                    <p>{Director}</p>
                </div>
            ))
        }
    </PageTemplate>
    }
  </>;
};

export default SelectedMovie
