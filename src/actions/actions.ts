import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "../axiosConfig";
import { apiKeyRawg } from "../key";

export const GET_GAMES = (page: string) => {
  // const navigate = useNavigate();
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
      try {
        await instance.get(`/games?${apiKeyRawg}&ordering=-added&dates=2023,2024&page=${page}`)
        .then((data) => {
          const games = data.data.results;
          dispatch({ type: "SET_GAMES", payload: games });
          const nextPage = data.data.next.slice(-1);
          dispatch({ type: "SET_NEXT_PAGE_HOME", payload: nextPage });
        })        
      } catch (err) {
        console.log(err);
        // navigate("/error");

      } finally {
      dispatch({ type: "SET_LOADING" });
      }  
  };
};

export const GET_SELECTED_GAME = (id: any, slug?: any, navigate?: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
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
    } finally {
    dispatch({ type: "SET_LOADING" });
    }
  }
}

export const GET_GAME_SCREENSHOTS = (id: any) => {
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

export const GET_GAME_TRAILER = (id: any) => {
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

export const GET_GAMES_TRENDS = (page: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      await instance.get(`/games?${apiKeyRawg}&ordering=-added&page=${page}`)
      .then((data) => {
        const trends = data.data.results;
        dispatch({ type: "SET_GAMES_TRENDS", payload: trends });
        const nextPage = data.data.next.slice(-1);            
        dispatch({ type: "SET_NEXT_PAGE_TRENDS", payload: nextPage });
      })
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  }
}

export const GET_SEARCH = (search: any, navigate?: any, ) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING"});
    try {
      await instance.get(`/games?${apiKeyRawg}&ordering=-rating&search=${search}`)
      .then((data) => {
        const searchResult = data.data.results;        
        dispatch({ type: "SET_SEARCH", payload: searchResult });
        const nextPage = data.data.next        
        dispatch({ type: "SET_NEXT_SEARCH", payload: nextPage });
        navigate(`/games/search/?search=${search}`);
      })
    } catch (err) {
      console.log(err);
    } finally {
    dispatch({ type: "SET_LOADING" });
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

export const GET_FILTER_RESULTS = (
  platformID: any,
  genreID: any,
  name: any,
  dateFrom: any,
  dateTo: any,
  sortRating: any
) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      await instance
        .get(
          `/games?${apiKeyRawg}&page_size=12${platformID ? `&platforms=${platformID}` : ""}${genreID ? `&genres=${genreID}` : ""}${name ? `&search=${name}` : ""}&dates=${dateFrom ? `${dateFrom}` : '2000'},${dateTo ? `${dateTo}` : '2024'}&ordering=-${sortRating}`)
        .then((data) => {
          const filter = data.data.results;
          const next = data.data.next;          
          dispatch({ type: "SET_FILTER_RESULTS", payload: filter });
          dispatch({ type: "SET_NEXT_FILTER_PAGE", payload: next });
        });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};