import isEmpty from 'lodash/isEmpty';

export const rmUserData = () => window.localStorage.removeItem('userData');
export const setUserData = userData =>
  window.localStorage.setItem('userData', JSON.stringify(userData));

export const getUserData = () => {
  const user = JSON.parse(window.localStorage.getItem('userData') || '{}');

  if (isEmpty(user)) {
    return null;
  }

  return user;
};
