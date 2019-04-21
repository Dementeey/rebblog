export const rmUserData = () => localStorage.removeItem('userData');
export const getUserData = () => JSON.parse(localStorage.getItem('userData'));
export const setUserData = userData =>
  localStorage.setItem('userData', JSON.stringify(userData));
