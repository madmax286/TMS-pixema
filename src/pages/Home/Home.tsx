import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { GET_GAMES } from "../../actions/actions";
import { IGame } from "../../interfaces";
import { ButtonShowMore, GameCard, Loader, PageTemplate } from "../../components";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const games = useSelector(({ games }) => games);
  const isLoading = useSelector(({ isLoading }) => isLoading);

  let randomPage = Math.floor(Math.random() * 500);

  useEffect(() => {
    if (!games.length) {
      dispatch(GET_GAMES(randomPage));
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <PageTemplate>
            <div className="games-layout">
              <div className="games-list">
                {games.length &&
                  games.map(
                    ({
                      background_image,
                      name,
                      id,
                      rating,
                      slug,
                      genres,
                    }: IGame) => (
                      <GameCard
                        key={id}
                        id={id}
                        background_image={background_image}
                        name={name}
                        rating={rating}
                        slug={slug}
                        genres={genres}
                      />
                    )
                  )}
              </div>              
              <ButtonShowMore onClick={() => dispatch(GET_GAMES(randomPage))}/>
            </div>
          </PageTemplate>
        </div>
      )}
    </>
  );
};

export default Home;
