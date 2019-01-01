import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <header style={{ borderBottom: '1px solid black' }}>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about" activeStyle={{ color: 'red' }}>
        About
      </NavLink>
    </nav>
  </header>
);
