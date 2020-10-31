import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {PrivetRoutes} from '../guards/PrivetRoutes';
import {BurgerBuilder} from '../containers/Burger/BurgerBuilder.container';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={BurgerBuilder}/>
      <PrivetRoutes path="/checkout" render={() => <h1>CheckOut</h1> }/>

      {/* <Route path=".*" component={NotFoundView} /> */}
    </Switch>
  );
};
