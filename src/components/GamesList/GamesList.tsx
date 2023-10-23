import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_GAMES } from '../../actions/actions';
import { IGame } from '../../interfaces';
import { GameCard, Loader, PageTemplate } from "..";
import "./gamesList.css";

const GamesList = () => {
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    const games = useSelector(({ games }) => games);

    const isLoading = useSelector(({isLoading}) => isLoading)
    // console.log(games);

    let randomPage = Math.floor(Math.random() * 500);
  
    useEffect(() => {
      if (!games.length) {
        dispatch(GET_GAMES(randomPage));
      }    
    }, []);

  return (
    <div>
      <PageTemplate>
        <div className="games-layout">
          <div className="games-list">
            {games.length &&
              games.map(({background_image, name, id, rating, slug, genres}: IGame) => (
                <GameCard
                  key={id}
                  id={id}
                  background_image={background_image}
                  name={name}
                  rating={rating}
                  slug={slug}
                  genres={genres}
                />
              ))}
          </div>
          <button
          onClick={() => {
            dispatch(GET_GAMES(randomPage));
            console.log(randomPage);            
          }}
          className='btn-show_more' type='button'>Show more</button>
        </div>
      </PageTemplate>
    </div>
  );
}

export default GamesList
