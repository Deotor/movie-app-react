import {
  FETCH_MOVIES,
  SEARCH_MOVIE,
  CHANGE_FILTER,
  CHANGE_SEARCHED
} from "../actions/types";

const initialState = {
  movies: [],
  page: 0,
  totalPages: 0,
  filter: "popular",
  searched: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      console.log("FETCH_MOVIES");
      return {
        ...state,
        movies: action.payload,
        page: action.page,
        totalPages: action.totalPages,
        filter: action.filter
      };
    case SEARCH_MOVIE:
      console.log("SEARCH_MOVIE");
      return {
        ...state,
        movies: action.payload,
        page: action.page,
        totalPages: action.totalPages
      };

    case CHANGE_FILTER:
      console.log("CHANGE_FILTER");
      return {
        ...state,
        filter: action.filter
      };
    case CHANGE_SEARCHED:
      console.log("CHANGE_SEARCHED");
      return {
        ...state,
        searched: action.searched
      };

    default:
      return state;
  }
}
