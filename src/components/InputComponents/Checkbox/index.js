import React, { Component } from 'react';
import { withFormsy, propTypes } from 'formsy-react';
import InputErrorMessage from '../InputErrorMessage';
import '../style.css';

class Checkbox extends Component {
  changeValue = event => {
    const { callBack, setValue } = this.props;

    setValue(event.target.checked);
    return callBack();
  };

  render() {
    const {
      id,
      name,
      title,
      isValid,
      getValue,
      isRequired,
      labelClassName,
      isFormSubmitted,
      getErrorMessage,
    } = this.props;
    const value = getValue();

    return (
      <label htmlFor={id || name} className={labelClassName || ''}>
        {title}
        <div className="input-component-wrap">
          <input
            id={id || name}
            type="checkbox"
            checked={value}
            onChange={this.changeValue}
            className="custom-checbox"
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

Checkbox.propTypes = {
  ...propTypes,
};

export default withFormsy(Checkbox);
