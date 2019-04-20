/**
 * AdminPanelEditor - container
 */

import { connect } from 'react-redux';
import { setPost } from './thunx';
import AdminPanelPage from './component';

const mapStateToProps = ({ adminPanelEditor }) => ({
  data: adminPanelEditor.data,
  error: adminPanelEditor.error,
  loading: adminPanelEditor.loading,
});

const mapDispatchToProps = dispatch => ({
  setPost: json => dispatch(setPost(json)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanelPage);
