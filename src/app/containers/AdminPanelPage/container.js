/**
 * AdminPanelPage - container
 */

import { connect } from 'react-redux';
import { setPost } from './thunx';
import AdminPanelPage from './component';

const mapStateToProps = ({ adminPanel }) => ({
  data: adminPanel.data,
  error: adminPanel.error,
  loading: adminPanel.loading,
});

const mapDispatchToProps = dispatch => ({
  setPost: () => dispatch(setPost()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanelPage);
