import React, { Component } from "react";

import "../../utilities.css";
import "./PhotoGrid.css";

/**
 * Card to render a photo and project preview
 *
 * Proptypes
 * @param {string} title
 */


class Card extends Component {
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
        <div className="col-md-4 col-lg-3 item">
                <div className="box">
                    <div className="cover">
                    </div>
                </div>
                <h3>{this.props.title}</h3>
            </div>
      </>
    );
  }
}

export default Card;