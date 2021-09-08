import React, { Component } from "react";

import "../../utilities.css";
import "./Skeleton.css";
import PhotoGrid from "./PhotoGrid.js";
import NavBar from "./NavBar.js";


class Home extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        <NavBar/>
        <PhotoGrid />
      </>
    );
  }
}

export default Home;