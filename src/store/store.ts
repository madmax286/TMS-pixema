import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  games: [],
  game: [],
  screenshots: [],
  trailer: [],
  trends: [],
  rating: 'top',
  isLoading: false,
  activeMenu: '',
  page: 0,
  nextSearch: '',
  search: [],
  onFocus: false,
  openFliter: false
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
    case "SET_PAGE" : {
      return {
        ...state,
        page: action.payload,
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
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
