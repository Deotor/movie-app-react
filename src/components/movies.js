import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/moviesActions";

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    console.log(this.props.movObj);
    console.log(this.props.movies);
    const movie = this.props.movies.map(movie => (
      <div key={movie.id} className="movie">
        <div>
          <img src={"http://image.tmdb.org/t/p/w185/" + movie.poster_path} />
        </div>
        <div className="movie-overview">
          <div>
            <b>{movie.title}</b>
          </div>
          <hr />
          <div>{movie.release_date}</div>
          <div>{movie.overview}</div>
        </div>
      </div>
    ));
    return <div className="movies">{movie}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  movObj: state.movObj.movObj
});

export default connect(
  mapStateToProps,
  { fetchMovies }
)(Movies);
