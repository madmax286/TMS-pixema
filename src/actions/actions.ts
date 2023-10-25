import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance, { apiKeyRawg } from "../axiosConfig";

export const GET_GAMES = (randomPage?: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
      try {
        await instance.get(`/games?${apiKeyRawg}&page_size=12&page=${randomPage}`)
        .then((data) => {
          const games = data.data.results;
          const page = data.data.next
          console.log(page);
          
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
      await instance.get(`/games/${id}?${apiKeyRawg}`)
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

export const GET_GAMES_TRENDS = (page: number) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      await instance.get(`/games?${apiKeyRawg}&ordering=-rating&page=${page}`)
      .then((data) => {
        const trends = data.data.results;
        console.log(trends);        
        const page = data.data.next
        console.log(page);
        
        dispatch({ type: "SET_NEXT_PAGE_TRENDS", payload: page });
        dispatch({ type: "SET_GAMES_TRENDS", payload: trends });
      })
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  }
}

export const GET_SEARCH = (search: any, navigate?: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING"});
    try {
      await instance.get(`/games?${apiKeyRawg}&page_size=12&search=${search}`)
      .then((data) => {
        const searchResult = data.data.results;        
        dispatch({ type: "SET_SEARCH", payload: searchResult });
        const nextSearchResult = data.data.next
        dispatch({ type: "SET_NEXT_SEARCH", payload: nextSearchResult });
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

export const GET_FILTER_RESULTS = (platformID: any, genreID: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      await instance
        .get(`/games?${apiKeyRawg}${platformID ? `&platforms=${platformID}` : ''}${genreID ? `&genres=${genreID}` : ''}`)
        .then((data) => {
          const filter = data.data.results;
          dispatch({ type: "SET_FILTER_RESULTS", payload: filter });
        });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};