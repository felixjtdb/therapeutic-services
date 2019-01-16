import React, { Component } from 'react';
import './css/App.css';
import Counselor from './Counselor.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Counselor name={"Felix"} img_name={"stock_image"} introduction={"I'm a wizard"}/>
      </div>
    );
  }
}

export default App;
