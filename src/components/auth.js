import React, { Component } from "react";

export default class Auth extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-outline-primary" type="button">
          Login
        </button>
        <button className="btn btn-outline-danger" type="button">
          Logout
        </button>
      </div>
    );
  }
}
