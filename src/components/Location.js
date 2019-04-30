import React, { Component } from 'react';
import '../css/Location.css'
export default class Location extends Component {

  render() {
    return (
      <div>
        <img className="MapImage" src={require("../assets/img/Home-on-Map.png")} alt={""} />
      </div>
    );
  }

}
