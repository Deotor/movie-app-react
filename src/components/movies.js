import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies, searchMovie } from "../actions/moviesActions";

class Movies extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.fetchMovies(this.props.filter);
  }

  paginationClick = page => {
    if (page > 0)
      if (page <= this.props.totalPages)
        if (this.props.searched)
          this.props.searchMovie(this.props.searched, page);
        else {
          console.log(this.props.filter);
          this.props.fetchMovies(this.props.filter, page);
        }
  };

  render() {
    console.log(this.props.totalPages);
    if (this.props.movies.length === 0)
      return <div>Nothing to show! Sorry :=)</div>;
    const movie = this.props.movies.map(movie => (
      <div key={movie.id} className="movie">
        <div>
          <img
            alt="poster"
            src={"http://image.tmdb.org/t/p/w185/" + movie.poster_path}
          />
        </div>
        <div className="movie-overview">
          <div className="movie-title">
            <b>{movie.title}</b>
          </div>
          <hr />
          <div className="movie-release">
            <b>{movie.release_date}</b>
          </div>
          <br />
          <div className="movie-overview-text">
            {movie.overview.length > 250
              ? movie.overview.slice(0, 250) + "..."
              : movie.overview}
          </div>
        </div>
      </div>
    ));
    const pagination = (
      <div>
        <ul className="pagination">
          <li
            className={this.props.page === 1 ? "hidden" : ""}
            onClick={this.paginationClick.bind(this, 1)}
          >
            First
          </li>
          <li
            className={this.props.page === 1 ? "hidden" : ""}
            onClick={this.paginationClick.bind(this, this.props.page - 1)}
          >
            Previous
          </li>
          <li className="active">{this.props.page}</li>
          <li
            className={
              this.props.page === this.props.totalPages ? "hidden" : ""
            }
            onClick={this.paginationClick.bind(this, this.props.page + 1)}
          >
            {this.props.page + 1}
          </li>
          <li
            className={
              this.props.page + 1 >= this.props.totalPages ? "hidden" : ""
            }
            onClick={this.paginationClick.bind(this, this.props.page + 2)}
          >
            {this.props.page + 2}
          </li>
          <li
            className={
              this.props.page + 2 >= this.props.totalPages ? "hidden" : ""
            }
            onClick={this.paginationClick.bind(this, this.props.page + 1)}
          >
            Next
          </li>
          <li
            className={this.props.page >= this.props.totalPages ? "hidden" : ""}
            onClick={this.paginationClick.bind(this, this.props.totalPages)}
          >
            Last
          </li>
        </ul>
      </div>
    );
    return (
      <main>
        <div className="movies">{movie}</div>
        <div>{pagination}</div>
      </main>
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
  { fetchMovies, searchMovie }
)(Movies);
