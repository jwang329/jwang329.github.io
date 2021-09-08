import React, { Component } from "react";

import "../../utilities.css";
import "./PhotoGrid.css";

import Card from "./Card.js";



class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }


  render() {
    let card = (
        <>
        <div className="col-md-4 col-lg-3 item">
                <div className="box">
                    <div className="cover">
                    </div>
                </div>
                <h3>Title</h3>
            </div>
        </>
      )
    return (
      <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
        <div className="team-grid">
        <div className="custom-container">
            <div className="intro">
            </div>
            <div className="row people">
                <Card title="iRobot" imglink="irobot"/>
                <Card title="Medtronic" imglink="medtronic"/>
                <Card title="Spartan" imglink="spartan"/>
                <Card title="Tactile Seat" imglink="tmg"/>
                <Card title="Yo-yos" imglink="yoyos"/>
                <Card title="Moonshot" imglink="moonshot"/>
                <Card title="Desktop Assistant" imglink="deskassistant"/>
                <Card title="Astro Adventure" imglink="toydesign"/>
                <Card title="Web Design" imglink="webdesign"/>
                <Card title="Chalk Murals" imglink="chalk"/>
                <Card title="Instruo" imglink="instruo"/>
                <Card title="FunnelVision" imglink="obm"/>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      </>
    );
  }
}

export default PhotoGrid;
