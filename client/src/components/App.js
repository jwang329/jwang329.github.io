import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";

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
          <Home path="/"/>
          <About path="/about"/>
          {/* <Resume path="/resume"/>
          <iRobot path="/irobot"/>
          <Medtronic path="/medtronic"/>
          <Spartan path="/spartan"/>
          <TangibleMedia path="/tmg"/>
          <Yoyos path="/yoyos"/>
          <Moonshot path="/moonshot"/>
          <Careshare path="/deskassistant"/>
          <ToyDesign path="/toydesign"/>
          <WebDesign path="/webdesign"/>
          <Chalk path="/chalk"/>
          <Instruo path="/instruo"/>
          <ObjectMedia path="/obm"/> */}
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
