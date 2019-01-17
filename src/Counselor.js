import React, { Component } from 'react';
import './css/Counselor.css'

class Counselor extends Component {

  render() {
    return (
      <div className="Container">
        <div className="Counselor_IMG_container">
          <img src={require("./img/" + this.props.img_name + ".jpg")} alt="hi"/>
          <h1 className="Counselor-header"> {this.props.name} </h1>
        </div>
        {this.props.introduction}
      </div>
    );
  }
}

export default Counselor;
