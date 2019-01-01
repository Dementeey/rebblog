/**
 * Home container
 */

import { connect } from 'react-redux';
import { fetchPosts } from './thunx';
import Home from './component';

const mapStateToProps = ({ homePage }) => ({
  data: homePage.data,
  error: homePage.error,
  loading: homePage.loading,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
