import React, { Component } from 'react';
import { render } from "react-dom"
import { Router } from "@reach/router"

import './css/App.css';

import Counselor from './components/Counselor.js'
import Banner from './components/Banner.js'
import Text from './components/Text.js'

import paragraphs from './assets/introText.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Banner/>
        <Router>
          <Intro path="/" />
          <Counselors path="councelors" />
        </Router>
      </div>
    );
  }
}

const Intro = () => (
  <Text text={paragraphs}/>
);

const Counselors = () => (
  <Counselor name={"Felix"} img_name={"stock_image"} introduction={"I'm a wizard"}/>
);

render(<App />, document.getElementById("root"));
export default App;
