import React, { Component } from "react";

import "../../utilities.css";
import "./PhotoGrid.css";

/**
 * Card to render a photo and project preview
 *
 * Proptypes
 * @param {string} title
 * @param {string} imglink
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
        <div className="col-md-4 col-lg-3 item closeBox">
                <div className={`box ${this.props.title}`}>
                    <a href={'/' + this.props.imglink} className="cover">
                            <div class="image-title">{this.props.title}</div>
                    </a>
                </div>
                {/* <div className="image-title">{this.props.title}</div> */}
            </div>
      </>
    );
  }
}

export default Card;