import React, { Component } from "react";
import { connect } from "react-redux";
import {
  searchMovie,
  fetchMovies,
  changeFilter
} from "../actions/moviesActions";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
  }

  componentDidMount() {
    this.setState({ filter: this.props.filter }, () => {
      if (this.state.filter) this.props.changeFilter(this.state.filter);
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.filter) {
        this.props.fetchMovies(this.state.filter);
        this.props.changeFilter(this.state.filter);
      }
    });
  };

  render() {
    return (
      <div className="nav-filter">
        <div className="input-group">
          <select
            disabled={this.props.searched ? "disabled" : ""}
            className="custom-select"
            name="filter"
            onChange={this.onChange}
            value={this.state.filter}
          >
            <option value="popular">popular</option>
            <option value="top_rated">top rated</option>
            <option value="upcoming">upcoming</option>
            <option value="now_playing">now playing</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  page: state.movies.page,
  totalPages: state.movies.totalPages,
  filter: state.movies.filter,
  searched: state.movies.searched
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, changeFilter }
)(Filter);
