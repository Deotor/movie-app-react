import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";

import Movies from "./components/movies";
import NavBar from "./components/navBar";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Movies />
        </div>
      </Provider>
    );
  }
}

export default App;
