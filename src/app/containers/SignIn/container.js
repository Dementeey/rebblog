/**
 * SignIn - container
 */

import { connect } from 'react-redux';
import component from './component';
import { getSignIn } from './thunx';

const mapStateToProps = ({ sign }) => ({
  data: sign.data,
  error: sign.error,
  loading: sign.loading,
});

const mapDispatchToProps = dispatch => ({
  getSignIn: data => dispatch(getSignIn(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
