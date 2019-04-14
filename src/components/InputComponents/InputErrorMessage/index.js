// @flow

import React from 'react';
import messages from '../../../helpers/validationErrorMessages';
import { type Props } from './model';
import '../style.css';

export default ({
  isRequired,
  isFormSubmitted,
  getValue,
  isValid,
  getErrorMessage,
}: Props) => {
  const getMessage = (): string => {
    if (!isFormSubmitted()) {
      return '';
    }

    if (isRequired() && !getValue()) {
      return messages.required;
    }

    if (!isValid()) {
      return getErrorMessage();
    }

    return '';
  };
  const errorClassName = `input-component-wrap__error-message`;

  return <span className={errorClassName}>{getMessage()}</span>;
};
