import React, { Component } from 'react';
import { Link } from 'react-router';

import { getSummonerByName, getMatches, getMatch } from '../utils/lol-api'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
    };
  }

  render() {
    return (
      <div>
        <Link to="/about/rick"><button>About</button></Link>
        <Link to="/inbox"><button>Inbox</button></Link>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
