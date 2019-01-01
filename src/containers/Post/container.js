/**
 * Post container
 */

import { connect } from 'react-redux';
import { fetchPost } from './thunx';
import Post from './component';

const mapStateToProps = ({ post }) => ({
  post,
});

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(fetchPost(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
