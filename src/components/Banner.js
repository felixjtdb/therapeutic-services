import React, { Component } from 'react';
import { Link } from "@reach/router"

import '../css/Banner.css'


class Banner extends Component {
  render() {
    return (
      <div className="BannerContainer">
        <div className="Logo"> Therapeutic Services </div>
        <div className="NavigationContainer">
          <Link className="Link" to="/">Intro</Link>
          <Link className="Link"to="councelors">Councelors</Link>
          <Link className="Link" to="location">Location </Link>
        </div>
      </div>
    );
  }
}

export default Banner;
