import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from "./containers/Dashboard/Dashboard";

export const PATHS = {

};

export const routes = (
  <Switch>
    <Route exact path='/' component={Dashboard} />
  </Switch>
);
