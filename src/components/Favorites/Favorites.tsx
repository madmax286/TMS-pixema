import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GameCard, PageTemplate } from '..'
import { IGame } from '../../interfaces';
import './favorites.css'

const Favorites = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  let arr: any = [];
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    //@ts-expect-error
    let item = JSON.parse(localStorage.getItem(key))[0];
    arr.push(item);
  }
  console.log(arr);

  return (
    <PageTemplate>
        <div className="games-layout">
          <div className="games-list">
            {arr.length &&
              arr.map(({background_image, name, id, rating, slug, genres}: IGame) => (
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
        </div>
    </PageTemplate>
  )
}

export default Favorites
