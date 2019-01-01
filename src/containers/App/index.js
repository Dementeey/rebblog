/**
 * App index
 */

import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../Home';
import About from '../../components/About';
import Header from '../../components/Header';
import Post from '../Post';
import './index.css';

const App = () => (
  <div>
    <Header />

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
