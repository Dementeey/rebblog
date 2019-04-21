/**
 * SignIn - component
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import styles from './style.module.css';

const SignIn = ({ loading, getSignIn }) => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [isFocusInput, setFocusInput] = useState(false);

  const toggleFocus = () => setFocusInput(!isFocusInput);

  const handleClick = () => {
    const data = {
      username: name,
      password: pass,
    };

    console.log('click', data);

    getSignIn(data);
  };

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        setErrorName(false);
        break;

      case 'pass':
        setPass(target.value);
        setErrorPass(false);
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.wrapper}>
      <Paper className={styles.paper} elevation={4}>
        {loading && (
          <div className={styles.loadingWrap}>
            <LinearProgress color="secondary" />
          </div>
        )}

        <Typography className={styles.title5} variant="h5" color="secondary">
          Welcome to
        </Typography>

        <Typography className={styles.title3} variant="h3" color="primary">
          RebbiBlog
          <Logo
            className={isFocusInput ? styles.logoFocus : styles.logo}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </Typography>

        <FormControl
          margin="normal"
          error={errorName}
          disabled={loading}
          onBlur={toggleFocus}
          onFocus={toggleFocus}
        >
          <InputLabel htmlFor="component-helper">Name</InputLabel>
          <Input
            id="component-helper"
            value={name}
            onChange={handleChange}
            aria-describedby="component-helper-text"
            name="name"
          />

          {errorName && (
            <FormHelperText id="component-helper-text">Ошибка!</FormHelperText>
          )}
        </FormControl>

        <FormControl
          margin="normal"
          error={errorPass}
          disabled={loading}
          onBlur={toggleFocus}
          onFocus={toggleFocus}
        >
          <InputLabel htmlFor="component-helper">Password</InputLabel>
          <Input
            id="component-helper"
            value={pass}
            onChange={handleChange}
            aria-describedby="component-helper-text"
            name="pass"
          />

          {errorPass && (
            <FormHelperText id="component-helper-text">Ошибка!</FormHelperText>
          )}
        </FormControl>

        <Button
          size="small"
          onClick={handleClick}
          color="secondary"
          variant="contained"
          className={styles.button}
          disabled={loading}
        >
          Sign In
        </Button>

        <Typography color="textPrimary">
          Don&apos;t have an account? <Link to="/about">Read </Link>
        </Typography>
      </Paper>
    </div>
  );
};

SignIn.propTypes = {
  loading: PropTypes.bool,
  getSignIn: PropTypes.func,
};

export default SignIn;
