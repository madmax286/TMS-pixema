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
  rating: 'top',
  isLoading: false,
  activeMenu: '',
  nextPageTrends: '',
  nextSearch: '',
  nextPage: '',
  search: [],
  onFocus: false,
  openFliter: false,
  filter: [],
  nextFilter: '',
  genreID: '',
  platformID: '',
  selectedGenre: '',
  selectedPlatform: ''
};

const rootReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "SET_GAMES": {
      return {
        ...state,
        games: [...state.games, ...action.payload],
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
    case "SET_FAVORITES": {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        // favorites: () => {
        //   let indx = state.favorites.indexOf(action.payload)
        //   if (~indx) state.favorites.splice(indx, 1);
        //   else state.favorites.push(action.payload);
        //   return indx
        //   console.log(indx);     
        // }
        
        // favorites: [...state.favorites, state.favorites.filter((item: any) => {
        //   if (item && item.id === action.payload.id) {
        //    return action.payload
        //   }
        //   return action.payload
        //   // return state.favorites
        // })]

       // favorites: [...state.favorites, state.favorites.filter(({id}: any) => id !== action.payload.id)]

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
    case "SET_ACTIVE_MENU" : {
      return {
        ...state,
        activeMenu: action.payload,
      };
    }
    case "SET_OPEN_FILTER" : {
      return {
        ...state,
        openFliter: action.payload,
      };
    }
    case "SET_NEXT_PAGE_TRENDS" : {
      return {
        ...state,
        nextPageTrends: action.payload,
      };
    }
    case "SET_NEXT_SEARCH" : {
      return {
        ...state,
        nextSearch: action.payload,
      };
    }
    case "SET_SEARCH" : {
      return {
        ...state,
        search: action.payload,
      };
    }
    case "SET_FILTER_RESULTS" : {
      return {
        ...state,
        // filter: [...action.payload],
        filter: [...state.filter.concat(action.payload)],
      };
    }
    case "SET_NEXT_FILTER_PAGE" : {
      return {
        ...state,
        nextFilter: action.payload,
      };
    }
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    case 'SET_FOCUS': {
      return {
        ...state,
        onFocus: action.payload,
      };
    }
    case "SET_GENRE_ID" : {
      return {
        ...state,
        genreID: action.payload,
      };
    }    
    case "SET_SELECTED_GENRE" : {
      return {
        ...state,
        selectedGenre: action.payload,
      };
    }
    case "SET_SELECTED_PLATFORM" : {
      return {
        ...state,
        selectedPlatform: action.payload,
      };
    }
    case "SET_PLATFORM_ID" : {
      return {
        ...state,
        platformID: action.payload,
      };
    }
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
