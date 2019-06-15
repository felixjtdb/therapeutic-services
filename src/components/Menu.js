import React, { Component } from 'react';
import { Link } from "@reach/router"

import '../css/Menu.css'
import menuImage from '../assets/img/Menu.png'

export default class Menu extends Component {
  constructor() {
    super()
    this.state = {
      visable: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      visable: !this.state.visable
    });
  }

  render() {
    return (
      <div>
      <img src={menuImage} alt={""} onClick={this.handleClick}/>
        { this.state.visable ?
          <div className='NavigationContainer'>
            <Link className="Link" to="/">Intro</Link>|
            <Link className="Link" to="councelors">Councelors</Link>|
            <Link className="Link" to="location">Location </Link>
          </div>
          :
          null
        }
      </div>
    );
  }
}
