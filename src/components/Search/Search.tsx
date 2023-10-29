import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_GENRES, GET_PLATFORMS, GET_SEARCH } from '../../actions/actions';
import { ReactComponent as FilterIcon } from "../../assets/Filter.svg";
import Filters from '../Filters/Filters';
import './search.css'

const Search = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  const onFocus = useSelector(({onFocus}) => onFocus)
  
  const theme = useSelector(({ theme }) => theme);
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  const [search, setSearch] = useState("");
  const rootEl = useRef(null);

  useEffect(() => {
    if (search.trim().length > 4) dispatch(GET_SEARCH(search, navigate))
    dispatch(GET_GENRES());
    dispatch(GET_PLATFORMS());
    
    // //@ts-expect-error
    // const onClickSearch = (e: any) => rootEl.current.contains(e.target);
    // dispatch({ type: "SET_FOCUS", payload: false });
    // document.addEventListener("click", onClickSearch);
    // return () => document.removeEventListener("click", onClickSearch);

  }, [search]);

  return (
    <>
      <div className="search-input" ref={rootEl}>
        <input
          autoFocus={onFocus}
          onClick={() => {
            navigate(`/games/search/?search=${search}`);
            dispatch({ type: "SET_FOCUS", payload: true });
          }}
          type="search"
          placeholder="Search..."
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
