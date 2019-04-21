// @flow

type messagesType = {
  required: string,
  email: string,
  password: string,
  confirmPassword: string,
  name: string,
  minText: string,
  maxText: string,
  twoFACodeChar: string,
  maxDescr: string,
};

const messages: messagesType = {
  required: 'Required',
  email: 'Invalid email address',
  password: 'Invalid password',
  confirmPassword: 'Passwords mismatch',
  name: `Incorrect! min 3 max 32 ( - ' )`,
  minText: 'min 3 char',
  maxText: 'max 32 char',
  twoFACodeChar: 'Code only 6 digits',
  maxDescr: 'Maximum 150 char',
};

export default messages;
