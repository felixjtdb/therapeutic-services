import React, { Component } from 'react';

export default class Text extends Component {
  renderParagraph(text) {
    var returnValue = ""
    for (var i = 0; i < text.length - 1; i++) {
      returnValue += text[i] + '\n'
    }
    return returnValue
  }

  render() {
    return (
      <p className = "text"> {this.renderParagraph(this.props.text)} </p>
    );
  }

}
