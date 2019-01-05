// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default () => (
  <header className="global-header">
    <nav className="global-header__nav">
      <NavLink to="/" exact activeClassName="global-header__nav--active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="global-header__nav--active">
        About
      </NavLink>
    </nav>
  </header>
);
