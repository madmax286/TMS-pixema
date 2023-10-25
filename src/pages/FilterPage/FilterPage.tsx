import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { GET_FILTER_RESULTS } from "../../actions/actions";
import { ButtonShowMore, GameCard, PageTemplate } from "../../components";
import { IGame } from "../../interfaces";

const FilterPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const filter = useSelector(({ filter }) => filter);
  const platformID = useSelector(({ platformID }) => platformID);
  const genreID = useSelector(({ genreID }) => genreID);

  useEffect(() => {
    console.log(filter);
    if (!filter.length) {
      dispatch(GET_FILTER_RESULTS(platformID, genreID))
    }
  },[])

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
          {/* {search.length && nextSearch !== null && (
            <ButtonShowMore onClick={onClick} />
          )} */}
        </div>
      </PageTemplate>
    </div>
  );
};

export default FilterPage;
