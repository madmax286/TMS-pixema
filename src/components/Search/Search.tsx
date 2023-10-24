import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_SEARCH } from '../../actions/actions';
import './search.css'

const Search = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  const onFocus = useSelector(({onFocus}) => onFocus)

  const [search, setSearch] = useState("");
  const rootEl = useRef(null);

  useEffect(() => {
    if (search.trim().length > 1) dispatch(GET_SEARCH(search, navigate))
    
    const onClick = (e: any) =>
    //@ts-expect-error
    rootEl.current.contains(e.target);
    dispatch({ type: "SET_FOCUS", payload: false });
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);

  }, [search]);

  return (
    <>
      <div className="search-input" ref={rootEl}>
        <input
          autoFocus={onFocus}
          onClick={() => {
            navigate(`/games/search/?search=${search}`);
            dispatch({ type: "SET_FOCUS", payload: true})
          }}
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </div>
    </>
  );
}

export default Search
