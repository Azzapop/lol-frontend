import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      summonerName: '',
      region: '',
    };
  }

  render() {
    const { summonerName, region } = this.state;
    const url = `${region}/${summonerName}/general`;
    let options = [
      { value: 'br', label: 'Brazil'  },
      { value: 'eune', label: 'EU, Nordic & East'  },
      { value: 'euw', label: 'EU West' },
      { value: 'jp', label: 'Japan' },
      { value: 'kr', label: 'Korea' },
      { value: 'lan', label: 'Latin America North' },
      { value: 'las', label: 'Lating America South' },
      { value: 'na', label: 'North America' },
      { value: 'oce', label: 'Oceania' },
      { value: 'ru', label: 'Russia' },
      { value: 'tr', label: 'Turkey' },
    ];
    return (
      <div>
        <Select value={region} options={options} onChange={(e) => this.setState({region: e.value})} />
        <input value={summonerName} onChange={(e) => this.setState({summonerName: e.target.value})} />
        <Link to={url}>Search</Link>
      </div>
    );
  }
}
