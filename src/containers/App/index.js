/**
 * App index
 */

import React from 'react';
import { Route, Switch, withRouter, NavLink } from 'react-router-dom';
import Home from '../Home';
import About from '../../components/About';
import Post from '../Post/component';
import './index.css';

const App = () => (
  <div>
    <header>
      <h1>Welcome</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about" activeStyle={{ color: 'red' }}>
          About
        </NavLink>
      </nav>
    </header>

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </main>
  </div>
);

export default withRouter(App);
