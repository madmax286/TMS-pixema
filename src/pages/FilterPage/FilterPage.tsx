import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { GET_GENRES, GET_PLATFORMS, SHOW_MORE } from "../../actions/actions";
import { ButtonShowMore, GameCard, PageTemplate } from "../../components";
import { IGame } from "../../utils/interfaces";
import './filterPage.css'

const FilterPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const filter = useSelector(({ filter }) => filter);
  const nextPage = useSelector(({ nextPage }) => nextPage);
  const nextResult = useSelector(({ nextResult }) => nextResult);
  const totalCount = useSelector(({ totalCount }) => totalCount);
  
  useEffect(() => {
    dispatch(GET_GENRES());
    dispatch(GET_PLATFORMS());
  }, []);

  const totalResult = [...filter, ...nextResult]

  return (
    <div>
      <PageTemplate>
        <div className="games-layout">
          <div className="results-header">
            <h5>{totalCount} games found</h5>            
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
                  released
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
          {totalResult.length && nextPage !== null && (
            <ButtonShowMore onClick={() => dispatch(SHOW_MORE(nextPage))}/>
          )}
        </div>
      </PageTemplate>
    </div>
  );
};

export default FilterPage;
