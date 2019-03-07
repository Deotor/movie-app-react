import React, { Component } from "react";
import Search from "./search";
import Filter from "./filter";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <Search />
        <Filter />
      </nav>
    );
  }
}
