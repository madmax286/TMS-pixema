import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "../axiosConfig";
import { IFilter } from "../utils/interfaces";
import { apiKeyRawg } from "../utils/key";

export const GET_GAMES = () => {
  // const navigate = useNavigate();
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
      try {
        await instance.get(`/games?${apiKeyRawg}&ordering=-rating&dates=2023,2025`)
        .then((data) => {
          const games = data.data.results;          
          dispatch({ type: "SET_GAMES", payload: games });
          const nextPage = data.data.next;
          dispatch({ type: "SET_NEXT_PAGE", payload: nextPage });
          const totalCount = data.data.count;
          dispatch({ type: "SET_TOTAL_COUNT", payload: totalCount });
        })        
      } catch (err) {
        console.log(err);
        // navigate("/error");
      } finally {
      dispatch({ type: "SET_LOADING" });
      }  
  };
};

export const SHOW_MORE = (nextPage: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING_SPINNER"});
      try {        
        await instance.get(nextPage).then((data) => {
          const nextPage = data.data.next;
          dispatch({ type: "SET_NEXT_PAGE", payload: nextPage });
          const nextResult = data.data.results;
          if (nextResult) dispatch({ type: "SET_NEXT_RESULT", payload: nextResult });
        });
      } catch (err) {
        console.log(err);
      } finally {
      dispatch({ type: "SET_LOADING_SPINNER" });
      }
  }
};

export const GET_SELECTED_GAME = (id:  string | undefined, slug?: string, navigate?: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    // dispatch({ type: "SET_LOADING" });
    try {
      await instance.get(`/games/${id}?${apiKeyRawg}`)
      .then((data) => {
        const game = data.data;       
        dispatch({ type: "SET_SELECTED_GAME", payload: game });
        if (id && slug && navigate) navigate(`/game/${id}/${slug}`)
        else navigate(`/game/${id}/${slug}/media`)
      })
    } catch (err) {
      console.log(err);
    } 
    // finally {
    // dispatch({ type: "SET_LOADING" });
    // }
  }
}

export const GET_GAMES_TRENDS = (firstDayMonth: string, today: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      await instance.get(`/games?${apiKeyRawg}&ordering=-added&dates=${firstDayMonth},${today}`)
      .then((data) => {
        const trends = data.data.results;
        dispatch({ type: "SET_GAMES_TRENDS", payload: trends });
        const nextPage = data.data.next;
        dispatch({ type: "SET_NEXT_PAGE", payload: nextPage });
        const totalCount = data.data.count;
        dispatch({ type: "SET_TOTAL_COUNT", payload: totalCount });
      })
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  }
}

export const GET_SEARCH = (search: string | undefined, navigate?: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING"});
    try {
      await instance.get(`/games?${apiKeyRawg}&search=${search}&search_precise=true`)
      .then((data) => {
        const searchResult = data.data.results;        
        dispatch({ type: "SET_SEARCH", payload: searchResult });
        const nextPage = data.data.next        
        dispatch({ type: "SET_NEXT_PAGE", payload: nextPage });
        const totalCount = data.data.count;
        dispatch({ type: "SET_TOTAL_COUNT", payload: totalCount });
        navigate(`/games/search/${search}`);
      })
    } catch (err) {
      console.log(err);
    } finally {
    dispatch({ type: "SET_LOADING" });
    }
  }
}

export const GET_FILTER_RESULTS = ({ platformID, genreID, name, releaseFrom, releaseTo, updateFrom, updateTo, sorting }: IFilter) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      await instance
        .get(
          `/games?${apiKeyRawg}${platformID ? `&platforms=${platformID}` : ""}${genreID ? `&genres=${genreID}` : ""}${name ? `&search=${name}` : ""}&dates=${releaseFrom ? `${releaseFrom}` : '1990'},${releaseTo ? `${releaseTo}` : '2025'}&updated=${updateFrom ? `${updateFrom}` : '1990'},${updateTo ? `${updateTo}` : '2024'}&ordering=${sorting}`)
        .then((data) => {
          const filter = data.data.results;          
          dispatch({ type: "SET_FILTER_RESULTS", payload: filter });
          const nextPage = data.data.next        
          dispatch({ type: "SET_NEXT_PAGE", payload: nextPage });
          const totalCount = data.data.count;
          dispatch({ type: "SET_TOTAL_COUNT", payload: totalCount });  
        });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

export const GET_GAME_SCREENSHOTS = (id: string | undefined) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    try {
      instance.get(`/games/${id}/screenshots?${apiKeyRawg}`)
      .then((data) => {
        const screenshots = data.data.results;        
        dispatch({ type: "SET_GAME_SCREENSHOTS", payload: screenshots });
      })
    } catch (err) {
      console.log(err);
    }
  }
}

export const GET_GAME_TRAILER = (id: string | undefined) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    try {
      instance.get(`/games/${id}/movies?${apiKeyRawg}`)
      .then((data) => {
        const trailer = data.data.results;        
        dispatch({ type: "SET_GAME_TRAILER", payload: trailer });
      })
    } catch (err) {
      console.log(err);
    }
  }
}

export const GET_GENRES = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    try {
      instance.get(`/genres?${apiKeyRawg}`)
      .then((data) => {
        const genres = data.data.results
        dispatch({ type: "SET_GENRES", payload: genres });
      })
    } catch (err) {
      console.log(err);
    }
  }
}

export const GET_PLATFORMS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    try {
      instance.get(`/platforms?${apiKeyRawg}`)
      .then((data) => {
        const platforms = data.data.results
        dispatch({ type: "SET_PLATFORMS", payload: platforms });
      })
    } catch (err) {
      console.log(err);
    }
  }
}