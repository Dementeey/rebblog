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
  const [isFocusInput, setFocusInput] = useState(false);
  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorPass, setIsErrorPass] = useState(false);
  const [errorName, setErrorName] = useState('');
  const [errorPass, setErrorPass] = useState('');

  const errorSpaceMsg = 'Поле не может быть содержать пробел(лы)';
  const getErrorMsg = num => `Поле не может быть короче ${num} символов`;
  const toggleFocus = () => setFocusInput(!isFocusInput);

  const handleClick = () => {
    const data = {
      username: name,
      password: pass,
    };

    // Validation password name
    if (name.length < 6) {
      setIsErrorName(true);
      setErrorName(getErrorMsg(6));
      return;
    }

    if (name.includes(' ')) {
      setIsErrorName(true);
      setErrorName(errorSpaceMsg);
      return;
    }

    // Validation password field
    if (pass.length < 8) {
      setIsErrorPass(true);
      setErrorPass(getErrorMsg(8));
      return;
    }

    if (pass.includes(' ')) {
      setIsErrorPass(true);
      setErrorPass(errorSpaceMsg);
      return;
    }

    getSignIn(data);
  };

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        setIsErrorName(false);
        setErrorName('');
        break;

      case 'pass':
        setPass(target.value);
        setIsErrorPass(false);
        setErrorPass('');
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
          error={isErrorName}
          disabled={loading}
          onBlur={toggleFocus}
          onFocus={toggleFocus}
        >
          <InputLabel htmlFor="component-helper-name">Name</InputLabel>
          <Input
            id="component-helper-name"
            value={name}
            onChange={handleChange}
            aria-describedby="component-helper-text"
            name="name"
          />

          {isErrorName && (
            <FormHelperText id="component-helper-text">
              {errorName}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl
          margin="normal"
          error={isErrorPass}
          disabled={loading}
          onBlur={toggleFocus}
          onFocus={toggleFocus}
        >
          <InputLabel htmlFor="component-helper-pass">Password</InputLabel>
          <Input
            id="component-helper-pass"
            value={pass}
            onChange={handleChange}
            aria-describedby="component-helper-text-pass"
            name="pass"
            type="password"
          />

          {isErrorPass && (
            <FormHelperText id="component-helper-text-pass">
              {errorPass}
            </FormHelperText>
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
