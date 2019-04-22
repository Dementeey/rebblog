import { rmUserData } from './userUtils';

export default () => {
  rmUserData();
  window.location.reload();
};
