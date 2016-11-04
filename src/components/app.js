import React, { Component } from 'react';
import About from './about';
import Inbox from './inbox';
import { Link } from 'react-router'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
    };
  }

  render() {
    const { initialMessage } = this.state;
    return (
      <div>
        <Link to="/about/rick"><button>About</button></Link>
        <Link to="/inbox"><button>Inbox</button></Link>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
