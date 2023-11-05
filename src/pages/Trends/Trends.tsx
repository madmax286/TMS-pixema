import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ButtonShowMore, GameCard, PageTemplate } from "../../components";
import { GET_GAMES_TRENDS, SHOW_MORE } from "../../actions/actions";
import { IGame } from "../../utils/interfaces";
import { firstDayMonth, today } from "../../utils/helpers";
import "./trends.css";

const Trends = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const trends = useSelector(({ trends }) => trends);
  const nextPage = useSelector(({ nextPage }) => nextPage);
  const nextResult = useSelector(({ nextResult }) => nextResult);
  const totalCount = useSelector(({ totalCount }) => totalCount);

  useEffect(() => {
    if (!trends.length) {
      dispatch(GET_GAMES_TRENDS(firstDayMonth, today));
    }
  }, []);

  const totalResult = [...trends, ...nextResult]

  return (
    <PageTemplate>
      <div className="games-layout">
        <div className="games-list__header">
          <h1>Trends this month</h1>
          <h3>{totalCount} games based on player counts and release date</h3>
        </div>
        <div className="games-list">
          {totalResult.length &&
            totalResult.map(
              ({
                background_image,
                name,
                id,
                rating,
                slug,
                genres,
                added,
                released,
              }: IGame) => (
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
        <ButtonShowMore onClick={() => dispatch(SHOW_MORE(nextPage))} />
      </div>
    </PageTemplate>
  );
};

export default Trends;
