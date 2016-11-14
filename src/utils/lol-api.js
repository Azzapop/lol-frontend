import axios from 'axios';

export function getSummonerByName(region, summonerNames) {
  return new Promise((resolve, reject) => {
    const endPoint = `https://${region}.api.pvp.net/api/lol/${region}/v1.4/summoner/by-name/${summonerNames}`;
    const data = axios.get(endPoint+auth);
    data.then(({ data }) => resolve(data)).catch((err) => reject(err));
  });
}
export function getMatches(region, summonerId) {
  return new Promise((resolve, reject) => {
    const endPoint = `https://${region}.api.pvp.net/api/lol/${region}/v2.2/matchlist/by-summoner/${summonerId}`
    const data = axios.get(endPoint+auth);
    data.then(({ data }) => resolve(data)).catch((err) => reject(err));
  });
}
export function getMatch(region, matchId) {
  return new Promise((resolve, reject) => {
    const endPoint = `https://${region}.api.pvp.net/api/lol/${region}/v2.2/match/${matchId}`
    const data = axios.get(endPoint+auth);
    data.then(({ data }) => resolve(data)).catch((err) => reject(err));
  })
}

// export default getSummonerByName;

// export getMatches;
