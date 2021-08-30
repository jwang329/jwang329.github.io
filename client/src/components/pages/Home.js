import React, { Component } from "react";

import "../utilities.css";
import "../Home.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Home page
 *
 * Proptypes
 * @param {func} 
 */

class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <>
        <div class="team-grid">
            <div class="container">
                <div class="intro">
                    <h2 class="text-center">Team </h2>
                    <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet.  </p>
                </div>
                <div class="row people">
                    <div class="col-md-4 col-lg-3 item">
                        <div class="box" style="background-image:url(assets/img/1.jpg)">
                            <div class="cover">
                                <h3 class="name">Ben Johnson</h3>
                                <p class="title">Musician</p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 item">
                        <div class="box" style="background-image:url(assets/img/2.jpg)">
                            <div class="cover">
                                <h3 class="name">Emily Clark</h3>
                                <p class="title">Artist </p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 item">
                        <div class="box" style="background-image:url(assets/img/3.jpg)">
                            <div class="cover">
                                <h3 class="name">Carl Kent</h3>
                                <p class="title">Stylist </p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 item">
                        <div class="box" style="background-image:url(assets/img/4.jpg)">
                            <div class="cover">
                                <h3 class="name">Felicia Adams</h3>
                                <p class="title">Model </p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      </>
    );
  }
}

export default Home;