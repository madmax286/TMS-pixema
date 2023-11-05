import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { GET_FILTER_RESULTS } from "../../actions/actions";
import { useOnClickOutside } from "../../utils/helpers";
import { Props } from "../../utils/interfaces";
import { ROUTE_FILTER_PAGE } from "../../utils/routes";
import { StyledFilter } from "./Filter.styled";
import "./filters.css";

const Filters: FC<Props> = ({ open, setOpen, node, close }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const genres = useSelector(({ genres }) => genres);
  const platforms = useSelector(({ platforms }) => platforms);
  const [sorting, setSorting] = useState("");
  const [genreID, setGenreID] = useState("");
  const [platformID, setPlatformID] = useState("");
  const [name, setName] = useState("");
  const [releaseFrom, setReleaseFrom] = useState("");
  const [releaseTo, setReleaseTo] = useState("");
  const [updateFrom, setUpdateFrom] = useState("");
  const [updateTo, setUpdateTo] = useState("");

  useOnClickOutside(node, () => {
    setOpen(false);
    dispatch({ type: "SET_OPEN_FILTER", payload: false }); 
  });

  const showFilterResults = () => {
    console.log(platformID, genreID, name, releaseFrom, releaseTo, sorting);    
    navigate(ROUTE_FILTER_PAGE);
    dispatch({type: 'SET_GENRE_ID', payload: genreID})
    dispatch({type: 'SET_PLATFORM_ID', payload: platformID})    
    dispatch(GET_FILTER_RESULTS({platformID, genreID, name, releaseFrom, releaseTo, updateFrom, updateTo, sorting}))
    close()
  };
  const clearFilter = () => {
    setSorting('')
    setGenreID('')
    setPlatformID('')
    setName('')
    setReleaseFrom('')
    setReleaseTo('')
    setUpdateFrom('')
    setUpdateTo('')
    console.log('clear');    
  }

  return (
    <div>
      <StyledFilter ref={node} open={open}>
        <div className="filter-header">
          <h1>Filters</h1>
          <h1 className="close-btn" onClick={close}>
            X
          </h1>
        </div>

        <span>Sort by</span>
        <div className="selector">
          <select
            onChange={(e) => setSorting(e.currentTarget.value)}
            name="Sortby"
            value={sorting}
            id=""
          >
            <option value="">Select ordering</option>
            <option value="-rating">Rating</option>
            <option value="-added">Popularity</option>
            <option value="name">Name of the game</option>
            <option value="-released">Released</option>
            <option value="-created">Created</option>
            <option value="-updated">Last modified</option>
          </select>
        </div>
        <span>Full or short name of game</span>
        <div className="input-name">
          <input
            onChange={(e) => setName(e.currentTarget.value)}
            type="search"
            placeholder="Your game"
            value={name}
          />
        </div>
        <span>Genre</span>
        <div className="selector">
          <select
            onChange={(e) => setGenreID(e.currentTarget.value)}
            name="Genre"
            value={genreID}
            id="Genre"
          >
            <option value="">Select genre</option>
            {genres.length &&
              genres.map(({ name, id }: any) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
          </select>
        </div>
        <span>Platforms</span>
        <div className="selector">
          <select
            onChange={(e) => setPlatformID(e.currentTarget.value)}
            name="Platforms"
            value={platformID}
            id="Platforms"
          >
            <option value="">Select platform</option>
            {platforms.length &&
              platforms.map(({ name, id }: any) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
          </select>
        </div>
        <span>Release date</span>
        <div className="input-year">
          <input
            onChange={(e) => setReleaseFrom(e.currentTarget.value)}
            type="date"
            placeholder="From"
            value={releaseFrom}
          />
          <input
            onChange={(e) => setReleaseTo(e.currentTarget.value)}
            type="date"
            placeholder="To"
            value={releaseTo}
          />
        </div>

        <span>Last modified date</span>
        <div className="input-year">
          <input
            onChange={(e) => setUpdateFrom(e.currentTarget.value)}
            type="date"
            placeholder="From"
            value={updateFrom}
          />
          <input
            onChange={(e) => setUpdateTo(e.currentTarget.value)}
            type="date"
            placeholder="To"
            value={updateTo}
          />
        </div>

        <div className="btn-confirm">
          <button onClick={clearFilter} className="btn-clear" type="button">
            Clear filter
          </button>

          <button
            onClick={showFilterResults}
            className="btn-results"
            type="button"
          >
            Show results
          </button>
        </div>
      </StyledFilter>
      <div className={`${open ? "" : "blackout"}`}></div>
    </div>
  );
};

export default Filters;
