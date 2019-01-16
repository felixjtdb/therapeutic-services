import React, { Component } from 'react';
import './css/Counselor.css'

class Counselor extends Component {

  render() {
    return (
      <div className="Container">
        <div className="Counselor_img">
          <img src={require("./img/" + this.props.img_name + ".jpg")} />
          <h1 className="Counselor-header"> {this.props.name} </h1>
        </div>
        <p> {this.props.introduction} </p>
      </div>
    );
  }
}

export default Counselor;
