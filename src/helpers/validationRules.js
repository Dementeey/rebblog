import { addValidationRule } from 'formsy-react';

export const validationRules = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
  presonName: /^[a-z'-]{3,32}$/i,
};

// Add Custom Validation for Formsy-React

addValidationRule(
  'isPassword',
  (values: string, value: string): boolean =>
    validationRules.password.test(value),
);

// ----------------- END ----------------
