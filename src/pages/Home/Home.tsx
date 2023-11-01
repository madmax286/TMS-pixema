import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { GET_GAMES, GET_GENRES } from "../../actions/actions";
import { IGame } from "../../interfaces";
import { ButtonShowMore, GameCard, Loader, PageTemplate } from "../../components";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const games = useSelector(({ games }) => games);
  const nextPageHome = useSelector(({ nextPageHome }) => nextPageHome);
  const isLoading = useSelector(({ isLoading }) => isLoading);
  
  useEffect(() => {
    if (!games.length) {
      dispatch(GET_GAMES('1'));
    }    
  }, []);

  return (
    <>
      {(
        <div>
          <PageTemplate>
            <div className="games-layout">
              <div className="games-list">
                {games.length &&
                  games.map(
                    ({background_image, name, id, rating, slug, genres, added, released}: IGame) => (
                      <GameCard
                        key={id}
                        id={id}
                        background_image={background_image}
                        name={name}
                        rating={rating}
                        slug={slug}
                        genres={genres}
                        added={added}
                        released={released}
                      />
                    )
                  )}
              </div>              
              <ButtonShowMore onClick={() => dispatch(GET_GAMES(nextPageHome))}/>
            </div>
          </PageTemplate>
        </div>
      )}
    </>
  );
};

export default Home;
