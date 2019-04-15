import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import HomeLogin from './HomeLogin';


import './ContentArea.css';

const ContentArea = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={HomeLogin} />
  </Switch>
);

export default ContentArea;
