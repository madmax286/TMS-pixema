import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  games: [],
  game: [],
  screenshots: [],
  isLoading: false,
};

const rootReducer = (state = initialState, action: any) => {
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
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    default:
      return state;
  }
};

const store = createStore(
  //@ts-expect-error
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
