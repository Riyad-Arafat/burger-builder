import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {PrivetRoutes} from '../guards/PrivetRoutes';
import {BurgerBuilder} from 'containers/Burger/BurgerBuilder.container';
import { CheckoutContainer } from 'containers/Checkout/Checkout.container'

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={BurgerBuilder}/>
      <PrivetRoutes path="/checkout" component={CheckoutContainer}/>

      {/* <Route path=".*" component={NotFoundView} /> */}
    </Switch>
  );
};
