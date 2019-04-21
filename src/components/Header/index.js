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
        Главная
      </NavLink>
      <NavLink to="/about" exact activeClassName="global-header__nav--active">
        Обо мне
      </NavLink>
      <NavLink to="/panel" exact activeClassName="global-header__nav--active">
        Панель управления
      </NavLink>
    </nav>
    <div className="global-header__user">
      <span>userName</span>
      <Link to="/logout">Выход</Link>
    </div>
  </header>
);
