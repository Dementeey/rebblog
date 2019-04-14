import React, { Component } from 'react';
import { withFormsy, propTypes } from 'formsy-react';
import InputErrorMessage from '../InputErrorMessage';
import '../../../helpers/validationRules';
import '../style.css';

class Textarea extends Component {
  changeValue = event => this.props.setValue(event.currentTarget.value);

  render() {
    const {
      id,
      name,
      title,
      isValid,
      getValue,
      isRequired,
      placeholder,
      labelClassName,
      isFormSubmitted,
      getErrorMessage,
    } = this.props;

    return (
      <label htmlFor={id || name} className={labelClassName || ''}>
        {title}
        <div className="input-component-wrap">
          <textarea
            id={id || name}
            placeholder={placeholder}
            onChange={this.changeValue}
            value={getValue() || ''}
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

Textarea.propTypes = {
  ...propTypes,
};

export default withFormsy(Textarea);
