import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "../axiosConfig";

const apiKey = 'c909af42'

export const GET_MOVIES = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    // dispatch({ type: "SET_LOADING" });

    try {
      instance.get(`/?apikey=${apiKey}&s=movie`)
      .then((data) => {
        const movies = data.data.Search;
        dispatch({ type: "SET_MOVIES", payload: movies });
      })
      
    } catch (err) {
      console.log(err);
    } finally {
    //   dispatch({ type: "SET_LOADING" });
    }
  };
};