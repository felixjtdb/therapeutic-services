import React from 'react';
import { Link } from "@reach/router"

import '../css/Menu.css'

export default function Menu() {
    return (
        <div className='NavigationContainer'>
          <Link className="Link" to="/">Home</Link>|
          <Link className="Link" to="counsellors">counsellors</Link>|
          <Link className="Link" to="location">Location</Link>|
          <Link className="Link" to="definitions">What is Therapy?</Link>
        </div>
    );
  }
