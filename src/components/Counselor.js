import React, { Component } from 'react';
import '../css/Counselor.css'

export default class Counselor extends Component {

  render() {
    return (
      <div className="Container">
        <img className ="Image" src={require("../assets/img/" + this.props.img_name + ".jpg")} alt="hi"/>
        <h1 className="Counselor-header"> {this.props.name} </h1>
        {this.props.introduction}
      </div>
    );
  }
}
