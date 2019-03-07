import React, { Component } from "react";
import { connect } from "react-redux";
import {
  searchMovie,
  fetchMovies,
  changeSearched
} from "../actions/moviesActions";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.searched) {
        this.props.searchMovie(this.state.searched);
        this.props.changeSearched(this.state.searched);
      } else {
        this.props.fetchMovies(this.props.filter);
        this.props.changeSearched(this.state.searched);
      }
    });
  };

  render() {
    return (
      <div className="nav-search">
        <input
          name="searched"
          type="text"
          className="form-control"
          placeholder="Search"
          value={this.state.searchedTitle}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  page: state.movies.page,
  totalPages: state.movies.totalPages,
  filter: state.movies.filter
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, changeSearched }
)(Search);
