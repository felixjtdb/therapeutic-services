import React, { Component } from 'react';

import '../css/Banner.css'
import Menu from './Menu'


class Banner extends Component {
  render() {
    return (
      <div className="BannerContainer">
        <div className="Logo"> Therapeutic Services </div>
        <Menu />
      </div>
    );
  }
}

export default Banner;
