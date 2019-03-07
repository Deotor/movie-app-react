import {
  FETCH_MOVIES,
  SEARCH_MOVIE,
  CHANGE_FILTER,
  CHANGE_SEARCHED
} from "./types";

export const fetchMovies = (filter = "popular", page = 1) => dispatch => {
  fetch(
    "https://api.themoviedb.org/3/movie/" +
      filter +
      "?api_key=52b79f7149942ffa860e6c6dfa4522ad&language=en-US&page=" +
      page
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_MOVIES,
        payload: data.results,
        page: data.page,
        totalPages: data.total_pages,
        filter: filter
      })
    );
};

export const searchMovie = (searched, page = 1) => dispatch => {
  fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=52b79f7149942ffa860e6c6dfa4522ad&language=en-US&query=" +
      searched +
      "&page=" +
      page +
      "&include_adult=false"
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SEARCH_MOVIE,
        payload: data.results,
        page: data.page,
        totalPages: data.total_pages
      })
    );
};

export const changeFilter = filter => dispatch => {
  dispatch({
    type: CHANGE_FILTER,
    filter: filter
  });
};

export const changeSearched = searched => dispatch => {
  dispatch({
    type: CHANGE_SEARCHED,
    searched: searched
  });
};
