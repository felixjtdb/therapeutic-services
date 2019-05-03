import React, { Component } from 'react';
import '../css/Location.css'
import ravensbourne from "../assets/img/Home-on-Map.png"
export default class Location extends Component {

  render() {
    return (
      <div>
        <img className="MapImage" src={ravensbourne} alt={""} />
      </div>
    );
  }

}
