import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  movies: [],
  test: [
    {
        Title: "The Lego Movie",
        Year: "2014",
        imdbID: "tt1490017",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
    },
    {
        Title: "The Simpsons Movie",
        Year: "2007",
        imdbID: "tt0462538",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNjc4NmQyNGUtMDg4NS00ZTZkLWI3ODQtMGJmYThiYjQxNGRiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
    },
]
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_MOVIES": {
      return {
        ...state,
        movies: action.payload,
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
