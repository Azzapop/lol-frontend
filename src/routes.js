import React from 'react';
import  { Route, indexRoute } from 'react-router';
import App from './components/app';
import Search from './components/search';
import General from './components/general';
import About from './components/about';
import Inbox from './components/inbox';


export default(
  <Route path="/" component={App}>
    <Route indexRoute component={Search} />
    <Route path=":region/:summonerName/general" component={General} />
    <Route path="inbox" component={Inbox} />
    <Route path="about/:name" component={About} />
  </Route>
);
