import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "../../axiosConfig";
import { ButtonShowMore, GameCard, PageTemplate } from "../../components";
import { IGame } from "../../interfaces";
import "../Home/home.css";

const SearchResults = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const search = useSelector(({ search }) => search);
  const nextSearch = useSelector(({ nextSearch }) => nextSearch);

  const onClick = () => {
    instance.get(nextSearch).then((data) => {
      const nextPage = data.data.next;
      dispatch({ type: "SET_NEXT_SEARCH", payload: nextPage });
      console.log(nextPage);

      const nextResult = data.data.results;
      if (nextResult.length)
        dispatch({ type: "SET_SEARCH", payload: nextResult });
      console.log(nextResult);
    });
  };

  return (
    <div>
      <PageTemplate>
        <div className="games-layout">
          <div className="games-list">
            {search.length &&
              search.map(
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
          {search.length && nextSearch !== null && (
            <ButtonShowMore onClick={onClick} />
          )}
        </div>
      </PageTemplate>
    </div>
  );
};

export default SearchResults;
