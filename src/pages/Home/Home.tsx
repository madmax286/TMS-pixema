import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { GET_GAMES, GET_GENRES, GET_PLATFORMS, SHOW_MORE } from "../../actions/actions";
import { ButtonShowMore, GameCard, PageTemplate } from "../../components";
import { theme } from "../../utils/helpers";
import { IGame } from "../../utils/interfaces";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const games = useSelector(({ games }) => games);
  const nextPage = useSelector(({ nextPage }) => nextPage);
  const nextResult = useSelector(({ nextResult }) => nextResult);
  const totalCount = useSelector(({ totalCount }) => totalCount);
  
  useEffect(() => {
    if (!games.length) dispatch(GET_GAMES());    
    dispatch(GET_GENRES());
    dispatch(GET_PLATFORMS());
  }, []);

  const totalResult = [...games, ...nextResult]

  return (
    <>
      {(
        <div>
          <PageTemplate>
            <div className="games-layout">
              <div className={`games-list__header ${theme ? '' : 'light-theme'}`}>
                <h1>{totalCount} new games 2023-2024</h1>
                <h3>Based on rating and release date</h3>
              </div>
              <div className="games-list">
                {totalResult.length &&
                  totalResult.map(
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
              <ButtonShowMore onClick={() => dispatch(SHOW_MORE(nextPage))}/>
            </div>
          </PageTemplate>
        </div>
      )}
    </>
  );
};

export default Home;
