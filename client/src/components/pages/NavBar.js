import React, { Component } from "react";

import "../../utilities.css";
import "./NavBar.css";

/**
 * Navigation bar header
 *
 * 
 */


class NavBar extends Component {
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
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&display=swap" rel="stylesheet"></link>
        <div className="header">
        <a href="/" className="nameLogo">Jessie Wang</a>
        <div className="navMenu">
            <a href="/">Work</a>
            <a href="/about">About</a>
            <a href="/resume">Resume</a>
        </div>
        </div>
      </>
    );
  }
}

export default NavBar;