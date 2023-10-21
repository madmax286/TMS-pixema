import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  movies: [],
  movie: []
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_MOVIES": {
      return {
        ...state,
        movies: action.payload,
      };
    }
    case "SET_SELECTED_MOVIE": {
      return {
        ...state,
        movie: [action.payload],
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
