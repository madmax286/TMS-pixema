import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  games: [],
  game: [],
  screenshots: [],
  trailer: [],
  genres: [],
  platforms: [],
  trends: [],
  favorites: [],
  filter: [],
  search: [],
  nextResult: [],
  totalCount: null,
  nextPage: '',
  rating: 'top',
  isLoading: false,
  isLoadingSpinner: false,
  openFliter: false,
  activeMenu: '',
  // genreID: '',
  // platformID: '',
  selectedGenre: '',
  selectedPlatform: ''
};

const rootReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "SET_GAMES": {
      return {
        ...state,
        games: [...action.payload],
      };
    }
    case "SET_SELECTED_GAME": {
      return {
        ...state,
        game: [action.payload],
      };
    }
    case "SET_GAME_SCREENSHOTS": {
      return {
        ...state,
        screenshots: [action.payload],
      };
    }
    case "SET_GAME_TRAILER": {
      return {
        ...state,
        trailer: [action.payload],
      };
    }
    case "SET_GENRES": {
      return {
        ...state,
        genres: action.payload,
      };
    }
    case "SET_TOTAL_COUNT": {
      return {
        ...state,
        totalCount: action.payload,
      };
    }
    case "SET_TOTAL_SEARCH_COUNT": {
      return {
        ...state,
        totalSearchCount: action.payload,
      };
    }
    case "SET_FAVORITES": {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case "SET_PLATFORMS": {
      return {
        ...state,
        platforms: action.payload,
      };
    }
    case "SET_GAMES_TRENDS": {
      return {
        ...state,
        trends: [...state.trends, ...action.payload],
      };
    }
    case "SET_ACTIVE_MENU": {
      return {
        ...state,
        activeMenu: action.payload,
      };
    }
    case "SET_OPEN_FILTER": {
      return {
        ...state,
        openFliter: action.payload,
      };
    }
    case "SET_NEXT_PAGE": {
      return {
        ...state,
        nextPage: action.payload,
      };
    }
    case "SET_NEXT_RESULT": {
      return {
        ...state,
        nextResult: [...state.nextResult, ...action.payload],
      };
    }
    case "SET_SEARCH": {
      return {
        ...state,
        search: action.payload,
      };
    }
    case "SET_FILTER_RESULTS": {
      return {
        ...state,
        filter: [...action.payload],
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    case "SET_LOADING_SPINNER": {
      return {
        ...state,
        isLoadingSpinner: !state.isLoadingSpinner,
      };
    }
    // case "SET_GENRE_ID" : {
    //   return {
    //     ...state,
    //     genreID: action.payload,
    //   };
    // }
    case "SET_SELECTED_GENRE": {
      return {
        ...state,
        selectedGenre: action.payload,
      };
    }
    case "SET_SELECTED_PLATFORM": {
      return {
        ...state,
        selectedPlatform: action.payload,
      };
    }
    // case "SET_PLATFORM_ID" : {
    //   return {
    //     ...state,
    //     platformID: action.payload,
    //   };
    // }
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
