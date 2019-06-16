import React, { Component } from 'react';

import {
  therapyTitle,
  therapyPara1,
  therapyPara2,
  integrativeTitle,
  integrative,
  personCentredTitle,
  personCentred,
  cbtTitle,
  cbt,
  acceptanceCommitmentTitle,
  acceptanceCommitment,
  existentialTitle,
  existential,
  psychodynamicTitle,
  psychodynamic,
  familySystemicTitle,
  familySystemic
} from '../assets/introText.js'

import '../css/Definitions.css'

class Definitions extends Component {

  render() {
    return (
      <div>

        <h1> {therapyTitle} </h1>
        <p> {therapyPara1} </p>
        <p> {therapyPara2} </p> <br / ><br />

        <h3> {integrativeTitle} </h3>
        <p> {integrative} </p> <br />

        <h3> {personCentredTitle} </h3>
        <p> {personCentred} </p> <br />

        <h3> {cbtTitle} </h3>
        <p> {cbt} </p> <br />

        <h3> {acceptanceCommitmentTitle} </h3>
        <p> {acceptanceCommitment} </p> <br />

        <h3> {existentialTitle} </h3>
        <p> {existential} </p> <br />

        <h3> {psychodynamicTitle} </h3>
        <p> {psychodynamic} </p> <br />

        <h3> {familySystemicTitle} </h3>
        <p> {familySystemic} </p> <br />

      </div>
    );
  }

}

export default Definitions;
