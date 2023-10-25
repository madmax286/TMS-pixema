import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "../../axiosConfig";
import { ButtonShowMore, GameCard, PageTemplate } from "../../components";
import { IGame } from "../../interfaces";

const FilterPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const filter = useSelector(({ filter }) => filter);
  const nextFilter = useSelector(({ nextFilter }) => nextFilter);

  const addFilterResults = () => {    
    instance.get(nextFilter).then((data) => {
      const nextPage = data.data.next;
      dispatch({ type: "SET_NEXT_FILTER_PAGE", payload: nextPage });

      const nextResult = data.data.results;
      if (nextResult.length)
        dispatch({ type: "SET_FILTER_RESULTS", payload: nextResult });
    });
  };

  return (
    <div>
      <PageTemplate>
        <div className="games-layout">
          <div className="games-list">
            {filter.length &&
              filter.map(
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
          {filter.length && nextFilter !== null && (
            <ButtonShowMore onClick={addFilterResults} />
          )}
        </div>
      </PageTemplate>
    </div>
  );
};

export default FilterPage;
