import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
