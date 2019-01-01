/**
 * Home container
 */

import { connect } from 'react-redux';
import { getPostsRequest } from './actions';
import Home from './component';

const mapStateToProps = ({ homePage }) => ({
  homePage,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
