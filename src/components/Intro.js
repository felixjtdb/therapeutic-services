import React, { Component } from 'react';
import Text from './Text.js'
import { paragraphs } from '../assets/introText.js'

export default class Intro extends Component {

  render() {
    return (
      <div>
        <Text text={paragraphs} />
      </div>

    );
  }

}
