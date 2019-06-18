import React from 'react';

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
} from '../assets/therapyText.js'

import '../css/Definitions.css'

export default function Definitions() {
    return (
      <div>

        <h1> {therapyTitle} </h1>
        <p> {therapyPara1} </p>
        <p> {therapyPara2} </p> <br /> 

        <h3> {integrativeTitle} </h3>
        <p> {integrative} </p> <br />

        <h3> {personCentredTitle} </h3>
        <p> {personCentred} </p>
        <ul>
          <li>Unconditional Positive Regard, that is, a warm, positive, receptive, non-judgemental attitude towards the client.</li>
          <li>Empathic Understanding, that is, the ability to imagine oneself in the other person’s position and to view the world from their perspective.</li>
          <li>Congruence, or quite simply, honesty and openness.</li>
        </ul>
        <p>
          The relationship between a counsellor and client is considered to be central couto the counselling as it
          helps to inform the understanding of particular psychological difficulties as it applies to clients.
        </p> <br />

        <h3> {cbtTitle} </h3>
        <p> {cbt} </p> <br />

        <h3> {acceptanceCommitmentTitle} </h3>
        <p> {acceptanceCommitment} </p> <br />

        <h3> {existentialTitle} </h3>
        <p> {existential} </p>
        <ul>
          <li> All people have the capacity for self-awareness. </li>
          <li>Each person has a unique identity that can be known only through relationships with others.</li>
          <li>People must continually re-create themselves because life’s meaning constantly changes.</li>
          <li>Anxiety is part of the human condition.</li>
        </ul>
        <p>
          Therapists help you find meaning in the face of anxiety by choosing to think and act responsibly and by
          confronting negative internal thoughts rather than external forces like societal pressures or luck.
          Fostering creativity, love, authenticity, and free will are common avenues that help move you toward transformation.
        </p> <br />

        <h3> {psychodynamicTitle} </h3>
        <p> {psychodynamic} </p> <br />

        <h3> {familySystemicTitle} </h3>
        <p> {familySystemic} </p> <br />

      </div>
    );
  }
