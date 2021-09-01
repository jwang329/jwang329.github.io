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
                <div className="box" style={{backgroundImage: `url("https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png")`}}>
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
        <div className="team-grid">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">Work </h2>
            </div>
            <div className="row people">
                <Card title="iRobot"/>
                <Card title="iRobot"/>
                <Card title="iRobot"/>
                <Card title="iRobot"/>
                <Card title="iRobot"/>
                <Card title="iRobot"/>
                <Card title="iRobot"/>
                <Card title="iRobot"/>
                {card}
                {card}
                {card}
                {card}
                {card}
                {card}
                {card}
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
