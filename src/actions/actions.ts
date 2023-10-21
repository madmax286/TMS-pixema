import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "../axiosConfig";

const apiKey = '?apikey=c909af42'

export const GET_MOVIES = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    // dispatch({ type: "SET_LOADING" });

    try {
      instance.get(`/${apiKey}&s=movie`)
      .then((data) => {
        const movies = data.data.Search;
        dispatch({ type: "SET_MOVIES", payload: movies });
      })
      
    } catch (err) {
      console.log(err);
    } finally {
    // dispatch({ type: "SET_LOADING" });
    }
  };
};

export const GET_SELECTED_MOVIE = (imdbID?: string, Type?: string, navigate?: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    // dispatch({ type: "SET_LOADING" });

    try {
      instance.get(`/${apiKey}&i=${imdbID}&plot=full`)
      .then((data) => {
        const movie = data.data;
        console.log('GET', movie);
        
        dispatch({ type: "SET_SELECTED_MOVIE", payload: movie });
        navigate(`/${Type}/${imdbID}`);
        // navigate(`/movie`)
      })
    } catch (err) {
      console.log(err);
    } finally {
    // dispatch({ type: "SET_LOADING" });
    }
  }
}