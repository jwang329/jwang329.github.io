import React, { Component } from "react";

import "../../utilities.css";
import "./Skeleton.css";
import PhotoGrid from "./PhotoGrid.js";


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
        <h1>Home page :)</h1>
        <PhotoGrid />
      </>
    );
  }
}

export default Home;