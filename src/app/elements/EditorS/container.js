/**
 * Editor - container
 */

import { connect } from 'react-redux';
import component from './component';
import { setCurrentPhoto } from '../../containers/EditorImageWrapper/actions';

const mapStateToProps = ({ editorGetPhoto }) => ({
  currentPhoto: editorGetPhoto.currentPhoto,
});

const mapDispatchToProps = dispatch => ({
  setCurrentPhoto: photo => dispatch(setCurrentPhoto(photo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
