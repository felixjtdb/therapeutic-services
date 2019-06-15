import React, { Component } from 'react';

import '../css/Banner.css'
import Menu from './Menu'


export default class Banner extends Component {
  render() {
    return (
      <div className="BannerContainer">
        <div>
          <div className="Logo"> Therapeutic Services </div>
          <Menu />
        </div>
      </div>
    );
  }
}
