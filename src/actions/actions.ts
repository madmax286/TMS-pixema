import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "../axiosConfig";

const apiKey = '?apikey=c909af42'
const apiKeyRawg = 'key=8975b9484fa84b44a2d31819352fcce3'

export const GET_GAMES = (randomPage?: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
      try {
        // instance.get(`/${apiKey}&s=movie&page=${randomPage}`)
        instance.get(`/games?${apiKeyRawg}&page_size=10&page=${randomPage}`)

        .then((data) => {
          const games = data.data.results;
          console.log(games);
          
          dispatch({ type: "SET_GAMES", payload: games });
        })        
      } catch (err) {
        console.log(err);
      } finally {
      dispatch({ type: "SET_LOADING" });
      }  
  };
};

export const GET_SELECTED_GAME = (id: any, slug?: any, navigate?: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      instance.get(`/games/${id}?${apiKeyRawg}`)
      .then((data) => {
        const game = data.data;
        console.log('SET_SELECTED_GAME', game);
        
        dispatch({ type: "SET_SELECTED_GAME", payload: game });
        navigate(`/game/${id}/${slug}`);
      })
    } catch (err) {
      console.log(err);
    } finally {
    dispatch({ type: "SET_LOADING" });
    }
  }
}

export const GET_GAME_SCREENSHOTS = (id: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    // dispatch({ type: "SET_LOADING" });
    try {
      instance.get(`/games/${id}/screenshots?${apiKeyRawg}`)
      .then((data) => {
        const screenshots = data.data.results;
        console.log('GET_GAME_SCREENSHOTS', screenshots);
        
        dispatch({ type: "SET_GAME_SCREENSHOTS", payload: screenshots });
      })
    } catch (err) {
      console.log(err);
    } finally {
    // dispatch({ type: "SET_LOADING" });
    }
  }
}