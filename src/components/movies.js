import React, { Component } from "react";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
      movies: []
    };
  }
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=52b79f7149942ffa860e6c6dfa4522ad&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: data.results, response: data });
      });
  }

  render() {
    console.log(this.state.response);
    console.log(this.state.movies);
    const movie = this.state.movies.map(movie => (
      <div key={movie.id}>{movie.title}</div>
    ));
    return <div>{movie}</div>;
  }
}
