import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';


import './ContentArea.css';

const ContentArea = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default ContentArea;
