/**
 * Post container
 */

import { connect } from 'react-redux';
import { fetchPost } from './thunx';
import Post from './component';

const mapStateToProps = ({ post }) => ({
  data: post.data,
  error: post.error,
  loading: post.loading,
});

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(fetchPost(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
