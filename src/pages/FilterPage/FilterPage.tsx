import React from "react";
import { ButtonShowMore, PageTemplate } from "../../components";

const FilterPage = () => {
  return (
    <div>
      <PageTemplate>
        <div className="games-layout">
          <div className="games-list">
            {/* {search.length &&
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
              )} */}
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
