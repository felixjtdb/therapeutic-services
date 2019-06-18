import React, { Component } from 'react';
import { render } from "react-dom"
import { Router } from "@reach/router"

import './css/App.css';

import Banner from './components/Banner.js'
import Intro from './components/Intro.js'
import Location from './components/Location.js'
import List from './components/List.js'
import Definitions from './components/Definitions.js'


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Banner/>
        <div className="inner">
          <Router>
            <Intro path="/" />
            <List path="counsellors" />
            <Definitions path="definitions" />
            <Location path="location" />
          </Router>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
