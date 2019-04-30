import React, { Component } from 'react';
import { render } from "react-dom"
import { Router } from "@reach/router"

import './css/App.css';

import Counselor from './components/Counselor.js'
import Banner from './components/Banner.js'
import Intro from './components/Intro.js'
import Location from './components/Location.js'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Banner/>
        <div className="inner">
          <Router>
            <Intro path="/" />
            <Counselor path="councelors" name={"Felix"} img_name={"stock_image"} introduction={"I'm a wizard"} />
            <Location path="location" />
          </Router>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
