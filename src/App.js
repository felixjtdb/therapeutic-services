import React, { Component } from 'react';
import './css/App.css';

import Counselor from './components/Counselor.js'
import Banner from './components/Banner.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Banner/>
        <Counselor name={"Felix"} img_name={"stock_image"} introduction={"I'm a wizard"}/>
      </div>
    );
  }
}

export default App;
