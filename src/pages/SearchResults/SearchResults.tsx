import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { GET_SEARCH, SHOW_MORE } from "../../actions/actions";
import { ButtonShowMore, GameCard, PageTemplate } from "../../components";
import { IGame } from "../../utils/interfaces";
import "../Home/home.css";

const SearchResults = () => {
  const { input } = useParams<{ input: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const searchRes = useSelector(({ search }) => search);
  const nextPage = useSelector(({ nextPage }) => nextPage);
  const nextResult = useSelector(({ nextResult }) => nextResult);
  const totalCount = useSelector(({ totalCount }) => totalCount);
  
  useEffect(() => {
    if (!searchRes.length) dispatch(GET_SEARCH(input, navigate))
  }, []);

  const totalSearch = [...searchRes, ...nextResult]

  return (
    <div>
      <PageTemplate>
        <div className="games-layout">
          <div className="results-header">
            <h4>{totalCount} matches found</h4>            
          </div>
          <div className="games-list">
            {totalSearch.length &&
              totalSearch.map(
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
          {totalSearch.length && nextPage !== null && (
            <ButtonShowMore onClick={() => dispatch(SHOW_MORE(nextPage))}/>
          )}
        </div>
      </PageTemplate>
    </div>
  );
};

export default SearchResults;
