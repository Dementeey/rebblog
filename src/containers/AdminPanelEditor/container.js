/**
 * AdminPanelEditor - container
 */

import { connect } from 'react-redux';
import { setPost, getPhoto } from './thunx';
import { setCurrentPhoto } from './actions';
import AdminPanelPage from './component';

const mapStateToProps = ({ adminPanelEditor }) => ({
  data: adminPanelEditor.data,
  error: adminPanelEditor.error,
  loading: adminPanelEditor.loading,
  photos: adminPanelEditor.photosUnsplash,
});

const mapDispatchToProps = dispatch => ({
  setPost: () => dispatch(setPost()),
  getPhoto: str => dispatch(getPhoto(str)),
  setCurrentPhoto: photo => dispatch(setCurrentPhoto(photo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPanelPage);
