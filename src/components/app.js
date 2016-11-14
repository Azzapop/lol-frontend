import React, { Component } from 'react';

import { getSummonerByName, getMatches, getMatch } from '../utils/lol-api'
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
    };
  }

  checkwin(data, id) {
    let participantId;
    data.participantIdentities.forEach(function(e) {
      if (e.player.summonerId == id) participantId = e.participantId;
    });
    const teamId = data.participants[participantId-1].teamId;
    let team;
    data.teams.forEach(function(e) {
      if (e.teamId == teamId) team = e;
    });
    return team.winner;
  }

  render() {
    let time = 10000;
    const { initialMessage } = this.state;
    const winner = this.checkwin;
    getSummonerByName('oce', 'azzapop').then((result) => {
      console.log(result);
      const summId = result.azzapop.id;
      getMatches('oce', summId).then((result) => {
        console.log(result);
        let outcomes = [];
        result.matches.forEach(function(e) {
          setTimeout(function() {
            getMatch('oce', e.matchId).then((result) => {
              console.log(result);
              const r = winner(result, summId);
              outcomes.push(result);
              console.log(outcomes);
            });
          }, time);
          time = time+1500;
        });
      });
    });
    return (
      <div>
        <Link to="/about/rick"><button>About</button></Link>
        <Link to="/inbox"><button>Inbox</button></Link>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
