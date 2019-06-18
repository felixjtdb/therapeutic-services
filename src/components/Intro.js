import React, { Component } from 'react';

import '../css/Intro.css'

export default class Intro extends Component {

  render() {
    return (
      <div>
        <div className="Introduction">
          <img className="Ravens" src={require("../assets/img/lineDrawing.jpg")} alt="Us!"/>
          <span> Based in South East London as a collective of counsellors and  psychotherapists with many years of experience offering means tested private treatment to young people and adults. </span>
        </div> <br />


        <div className="Quotes">
          <p>
            <b>Julian Lucchesi</b> <br />
            <i>
              There are many reasons why we can all struggle at times. Speaking to the right person in the right environment can help.
              What I can offer is someone that will listen to you so you can find healthy ways to cope, build resilience and help make
              the changes that will benefit you.
            </i><br /><br />

            <b>Anna Callinan</b> <br />
            <i>
              Counselling really helps you explore and start to make sense of any difficulties
              you might be having, it helps you become more self aware and gives you insight and
              coping strategies to manage your ups and downs in life. I offer a safe therapeutic
              space to explore and get to know yourself better.
            </i><br /><br />
          </p>
        </div>

        <div className="FurtherIntro">
          Our therapists hold professional registration or accreditation with the BACP and BABCP umbrella regulatory bodies. Each therapist is fully insured and have a minimum of 2 years of post qualification experience working within the community, for employment support organisations, and for statutory services such as the NHS.
          <br /> <br />
          Individually we offer a variety of different approaches informed by our training and areas of specialism including Integrative counselling, Existential, CBT, Family and relationship psychotherapy. Collectively we have a shared commitment to working collaboratively within a therapeutic relationship that is client led and built on trust. We offer telephone and online services for those who cannot physically access our premises.
          <br /> <br />
          If you are looking for some support of this kind please browse through our profiles. We are happy to offer a free 30 minute telephone consultation to help you decide if therapy is the right step for you, and to help you find a therapist to meet your needs.
          <br /> <br />
        </div>
        <br />

      </div>

    );
  }
}
