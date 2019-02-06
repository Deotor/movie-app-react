import { FETCH_MOVIES, SEARCH_MOVIE } from "../actions/types";

const initialState = {
  movies: [],
  searchedMovies: [],
  movObj: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      console.log("FETCH_MOVIES");
      return { ...state, movies: action.payload, movObj: action.movObj };

    default:
      return state;
  }
}
