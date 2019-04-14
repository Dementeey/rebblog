import React, { Component } from 'react';
import { withFormsy, propTypes } from 'formsy-react';

import InputErrorMessage from '../InputErrorMessage';
import '../../../helpers/validationRules';
import '../style.css';

class Input extends Component {
  changeValue = event => this.props.setValue(event.currentTarget.value);

  render() {
    const {
      id,
      type = 'text',
      name,
      title,
      isValid,
      onFocus,
      getValue,
      onKeyPress,
      isRequired,
      placeholder,
      autocomplete,
      labelClassName,
      isFormSubmitted,
      getErrorMessage,
    } = this.props;

    return (
      <label htmlFor={id || name} className={labelClassName || ''}>
        {title}
        <div className="input-component-wrap">
          <input
            id={id || name}
            placeholder={placeholder}
            onChange={this.changeValue}
            type={type}
            value={getValue() || ''}
            onFocus={onFocus}
            onKeyPress={onKeyPress}
            autoComplete={autocomplete}
          />

          <InputErrorMessage
            isRequired={isRequired}
            isFormSubmitted={isFormSubmitted}
            getValue={getValue}
            isValid={isValid}
            getErrorMessage={getErrorMessage}
          />
        </div>
      </label>
    );
  }
}

Input.propTypes = {
  ...propTypes,
};

export default withFormsy(Input);
