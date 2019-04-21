/**
 * App index
 */

import React, { useEffect, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import Home from './containers/Home';
import About from './elements/About';
import Header from './components/Header';
import NotFoundPage from './elements/NotFoundPage';
import Post from './containers/Post';
import AdminPanelPage from './containers/AdminPanelPage';
import AdminPanelEditor from './containers/AdminPanelEditor';
import SignIn from './containers/SignIn';

import { signInSuccess } from './containers/SignIn/actions';
import PrivateRouter from '../helpers/PrivateRouter';
import { getUserData } from '../helpers/userUtils';
import './style.css';

const App = ({ setDataInState, signData }) => {
  const [isAuth, setAuth] = useState(false);
  const user = getUserData();

  useEffect(() => {
    if (!_isEmpty(user) && user.accessToken && user.refreshToken) {
      setAuth(true);
    }
  }, []);

  useEffect(
    () => {
      if (
        _isEmpty(signData) &&
        !_isEmpty(user) &&
        user.accessToken &&
        user.refreshToken
      ) {
        setDataInState(user);
        setAuth(true);
      }
    },
    [signData]
  );

  return (
    <>
      <Route path="/" component={Header} />

      <main>
        <Switch>
          <PrivateRouter
            exact
            isAuth={isAuth}
            to="/"
            path="/panel"
            component={AdminPanelPage}
          />
          <PrivateRouter
            exact
            isAuth={isAuth}
            to="/"
            path="/panel/edit"
            component={AdminPanelEditor}
          />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/post/:id" component={Post} />
          <PrivateRouter
            exact
            isAuth={!isAuth}
            to="/panel"
            path="/panel/sign"
            component={SignIn}
          />

          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </>
  );
};

App.propTypes = {
  signData: PropTypes.object,
  setDataInState: PropTypes.func,
};

/**
 * Connect App
 */

const mapStateToProps = ({ sign }) => ({
  signData: sign.data,
});

const mapDispatchToProps = dispatch => ({
  setDataInState: data => dispatch(signInSuccess(data)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
