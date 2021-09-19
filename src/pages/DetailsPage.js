import React, { Component } from "react";

import Header from "parts/Header";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import data from "json/landingPage.json";

export default class DetailsPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>

        <Testimony data={data.testimonial}></Testimony>
        <Footer></Footer>
      </>
    );
  }
}
