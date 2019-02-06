import { FETCH_MOVIES, SEARCH_MOVIE } from "./types";

export const fetchMovies = () => dispatch => {
  console.log("fetchMovies");
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=52b79f7149942ffa860e6c6dfa4522ad&language=en-US&page=1"
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_MOVIES,
        payload: data.results,
        movObj: data
      })
    );
};
