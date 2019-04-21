/**
 * App index
 */

import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../Home';
import AdminPanelPage from '../AdminPanelPage';
import AdminPanelEditor from '../AdminPanelEditor';
import About from '../../components/About';
import Header from '../../components/Header';
import NotFoundPage from '../../components/NotFoundPage';
import Post from '../Post';
import './index.css';

const App = () => (
  <div>
    <Route path="/" component={Header} />

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/post/:id" component={Post} />
        <Route exact path="/panel" component={AdminPanelPage} />
        <Route exact path="/panel/edit" component={AdminPanelEditor} />

        <Route component={NotFoundPage} />
      </Switch>
    </main>
  </div>
);

export default withRouter(App);
