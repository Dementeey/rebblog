/**
 * EditorImageWrapper - container
 */

import { connect } from 'react-redux';
import component from './component';
import { getPhoto, getPhotoNext, getPhotoPrev } from './thunx';
import { setCurrentPhoto } from './actions';

const mapStateToProps = ({ editorGetPhoto }) => ({
  photos: editorGetPhoto,
});

const mapDispatchToProps = dispatch => ({
  getPhoto: (str, page, operation) => dispatch(getPhoto(str, page, operation)),
  getPhotoPrev: str => dispatch(getPhotoPrev(str)),
  getPhotoNext: str => dispatch(getPhotoNext(str)),
  setCurrentPhoto: photo => dispatch(setCurrentPhoto(photo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
