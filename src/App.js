import React, { Component } from 'react';
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
        <div className = "body">
          <Text text={paragraphs}/>
          <Counselor name={"Felix"} img_name={"stock_image"} introduction={"I'm a wizard"}/>
        </div>
      </div>
    );
  }
}

export default App;
