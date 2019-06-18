import React, { Component } from 'react';

import Counsellor from './Counsellor.js'

import {
  nicky,
  julian,
  elizabeth,
  julia,
  anna
 } from '../assets/counsellorText.js'

import '../css/List.css'

export default class List extends Component {
  constructor() {
    super()
    this.state = {
      left: true
    }
  }

  render() {
    return (
      <div>
        <Counsellor className="Counsellor" name={"Nicky Bowler"} img_name={"Nicky"} text={nicky} />
        <Counsellor className="Counsellor" name={"Julian Lucchesi"} img_name={"Julian"} text={julian} /> 
        <Counsellor className="Counsellor" name={"Julia Theo"} img_name={"Julia"} text={julia} /> 
        <Counsellor className="Counsellor" name={"Elizabeth Elgueta"} img_name={"Elizabeth"} text={elizabeth} /> 
        <Counsellor className="Counsellor" name={"Anna Callinan"} img_name={"Anna"} text={anna} /> 
      </div>
    );
  }
}
