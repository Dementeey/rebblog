import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default ({ component: Component, isAuth, to, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuth ? <Component {...props} /> : <Redirect to={to} />)}
  />
);
