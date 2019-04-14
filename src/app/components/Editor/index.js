/**
 * Editor - component
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Editor, EditorState } from 'draft-js';

import 'draft-js/dist/Draft.css';
import styles from './index.css';

const EditorComponent = ({ callback, placeholder }) => {
  const [edState, setEditorState] = useState(EditorState.createEmpty());
  const onChange = editorState => {
    callback && callback(editorState);
    setEditorState(editorState);
  };

  return (
    <div className="draft-editor-container">
      <div className={styles.editor}>
        <Editor
          editorState={edState}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

EditorComponent.propTypes = {
  callback: PropTypes.func,
  placeholder: PropTypes.string,
};

export default EditorComponent;
