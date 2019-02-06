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
      <div key={movie.id}>{movie.title}</div>
    ));
    return <div>{movie}</div>;
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
