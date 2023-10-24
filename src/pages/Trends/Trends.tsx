import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ButtonShowMore, GameCard, PageTemplate } from "../../components";
import { GET_GAMES_TRENDS } from "../../actions/actions";
import { IGame } from "../../interfaces";
import "./trends.css";

const Trends = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const trends = useSelector(({ trends }) => trends);
  const page = useSelector(({ page }) => page);

  let randomPage = Math.floor(Math.random() * 100);
  useEffect(() => {
    if (!trends.length) {
      dispatch(GET_GAMES_TRENDS(randomPage));
    }
  }, []);

  return (
    <PageTemplate>
      <div className="games-layout">
        <div className="games-list">
          {trends.length &&
            trends.map(
              ({ background_image, name, id, rating, slug, genres }: IGame) => (
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
        <ButtonShowMore onClick={() => dispatch(GET_GAMES_TRENDS(page))}/>
      </div>
    </PageTemplate>
  );
};

export default Trends;
