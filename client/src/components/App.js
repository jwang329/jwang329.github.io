import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Home from "./pages/Home.js";

import "../utilities.css";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }


  render() {
    return (
      <>
        <Router>
          <Home 
            path="/"
          />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
