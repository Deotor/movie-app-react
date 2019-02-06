import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedTitle: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = e => {
    if (this.state.searchedTitle) {
      fetch(
        "https://api.themoviedb.org/3/search/multi?api_key=52b79f7149942ffa860e6c6dfa4522ad&language=en-US&query=" +
          this.state.searchedTitle +
          "&page=1&include_adult=true"
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    }
  };
  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <div className="input-group">
          <input
            name="searchedTitle"
            type="text"
            className="form-control"
            placeholder="Search"
            value={this.state.searchedTitle}
            onChange={this.onChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.onClick}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
