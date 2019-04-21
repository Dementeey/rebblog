/**
 * Header - index
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import logout from '../../../helpers/logout';
import styles from './index.module.css';

const Header = ({ isAuth, history }) => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCloseMenu = () => {
    setOpenMenu(false);
    setAnchorEl(null);
  };

  const handleOpenMenu = ({ currentTarget }) => {
    setOpenMenu(true);
    setAnchorEl(currentTarget);
  };

  const handlerPanel = () => {
    handleCloseMenu();
    history.push('/panel');
  };

  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <nav className={styles.nav}>
          <NavLink to="/" exact>
            Главная
          </NavLink>
          <NavLink to="/about" exact>
            О Блоге
          </NavLink>
          {}
        </nav>

        {isAuth && (
          <div>
            <IconButton
              aria-owns={isOpenMenu ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={handleOpenMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isOpenMenu}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handlerPanel}>Панель управления</MenuItem>
              <MenuItem disabled onClick={handleCloseMenu}>
                Профиль
              </MenuItem>
              <MenuItem onClick={logout}>Выход</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool,
  history: PropTypes.object,
};

export default Header;
