import React from 'react';
import { withFormsy, propTypes } from 'formsy-react';
import InputErrorMessage from '../InputErrorMessage';
import '../../../helpers/validationRules';
import '../style.css';

class Select extends React.Component {
  changeValue = event => this.props.setValue(event.currentTarget.value);

  render() {
    const {
      id,
      name,
      title,
      option,
      options,
      isValid,
      getValue,
      className,
      isRequired,
      labelClassName,
      isFormSubmitted,
      getErrorMessage,
    } = this.props;

    const getOptions = options.map(el => (
      <option key={el.title + el.value} value={el.value}>
        {el.title}
      </option>
    ));

    return (
      <label htmlFor={id || name} className={labelClassName || ''}>
        {title}
        <div className="input-component-wrap">
          <select
            id={id || name}
            name={name}
            className={className || ''}
            onChange={this.changeValue}
            value={getValue()}
          >
            <option value="">{option}</option>
            {getOptions}
          </select>

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

Select.propTypes = {
  ...propTypes,
};

export default withFormsy(Select);
