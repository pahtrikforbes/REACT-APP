import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Home2 from './Home2';


import './ContentArea.css';

const ContentArea = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home2} />
  </Switch>
);

export default ContentArea;
