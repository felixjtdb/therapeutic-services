import React, { Component } from 'react';
import '../css/Counsellor.css'

export default class Counsellor extends Component {
  render() {
    const allTraining = this.props.text.training
    const trainingItems = allTraining.map((certificate) =>
      <li> {certificate} </li>
    );

    return (
      <div className="Container">
        <img className ="Image" src={require("../assets/img/counsellors/" + this.props.img_name + ".jpg")} alt={this.props.name}/>
        <h1 className="Counsellor-header">
          {this.props.name}
          <div className={"Contact"}> Contact: +123456789 </div>
        </h1>
        <div className={"Description"}>
          <p> {this.props.text.intro} </p>
          <p> {this.props.text.main} </p>
          <hr />
          <ul> {trainingItems} </ul>
        </div>
        <br/>
      </div>
    );
  }
}
