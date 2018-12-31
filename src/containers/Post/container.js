/**
 * Post container
 */

import { connect } from 'react-redux';
import { getPostRequest } from './actions';
import Post from './component';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(getPostRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
