import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_GENRES, GET_PLATFORMS, GET_SEARCH } from '../../actions/actions';
import { ReactComponent as FilterIcon } from "../../assets/Filter.svg";
import Filters from '../Filters/Filters';
import './search.css'

const Search = () => {
  const { input } = useParams<{ input: string }>();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  const handleKeyDown = (event: { key: string; }) => {    
    if (event.key === 'Enter') {
      if (search.trim().length > 0) dispatch(GET_SEARCH(search, navigate))
      dispatch(GET_GENRES());
      dispatch(GET_PLATFORMS());
    }
  };

  return (
    <>
      <div className="search-input">
        <input
          onKeyDown={handleKeyDown}
          type="search"
          placeholder={input || "Search"}
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <div
          onClick={() => {
            setOpen(!open);
            dispatch({ type: "SET_OPEN_FILTER", payload: true });
          }}
          className="icon-filter"
        >
          <FilterIcon />
        </div>
      </div>
      <Filters open={!open} setOpen={setOpen} node={node} close={close} />
    </>
  );
}

export default Search
