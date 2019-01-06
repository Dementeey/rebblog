/**
 * @flow
 * Header - index
 */

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
    <div className="global-header__user">
      <span>userName</span>
      <Link to="/logout">Logout</Link>
    </div>
  </header>
);
