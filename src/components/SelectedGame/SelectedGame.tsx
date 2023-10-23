import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_GAME_SCREENSHOTS, GET_SELECTED_GAME } from '../../actions/actions';
import { IGame } from '../../interfaces';
import PageTemplate from '../PageTemplate/PageTemplate';
import './selectedGame.css'

const SelectedGame = () => {
  const { slug, id } = useParams<{ slug: string, id: string}>();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  
  const game = useSelector(({ game }) => game);
  const screenshots = useSelector(({ screenshots }) => screenshots);

  useEffect(() => {
    if (!game.length) dispatch(GET_SELECTED_GAME(id, slug, navigate));
    dispatch(GET_GAME_SCREENSHOTS(id));
    
    console.log(game);
    console.log(screenshots);  
  }, []);
  
  return (
    <>
      {slug && id && (
        <PageTemplate>
          {game.length &&
            game.map(
              ({ background_image, name, rating, slug, id, genres, description_raw, platforms, released, website }: IGame) => (
                <main key={id} className="game-content">
                  <div className="game__screenshots">
                    {screenshots.length &&
                      screenshots[0].map((e: any, id: number) => (
                        <div key={id} className="game__screenshots-img">
                          <img src={e.image} alt={e.image} />
                        </div>
                      ))}
                  </div>
                  <div className="game__description">
                    <div className='game__genres'>
                      <h5>Genres: </h5>
                      {genres.length &&
                        genres.map((e: any, id: number) => (
                          <h5 key={id}>{e.name}</h5>
                        ))}
                    </div>
                    <h1>{name}</h1>
                    <h3>{rating}</h3>
                    <h4>{description_raw}</h4>
                    <div className='game__platforms'>
                      <h5>Platforms: </h5>
                      {platforms.length &&
                        platforms.map((e: any, id: number) => (
                          <h5 key={id}>{e.platform.name}</h5>
                        ))}
                    </div>
                    <h4>Released: {released}</h4>
                    <a href={website}>{website}</a>

                  </div>
                </main>
              )
            )}
        </PageTemplate>
      )}
    </>
  );
};

export default SelectedGame