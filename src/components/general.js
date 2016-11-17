import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      summonerName: props.params.summonerName,
      region: props.params.region,
    };
  }

  render() {
    const { summonerName, region } = this.state;
    return (
      <div>
        <p>{summonerName}</p>
        <p>{region}</p>
      </div>
    );
  }
}
