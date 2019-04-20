/**
 * AdminPanelEditor - component
 */

import React, { useState } from 'react';
// import { Value } from 'slate';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';
import Loader from '../../components/Loader';
import Editor from '../../elements/EditorS';
import EditorImageWrapper from '../EditorImageWrapper';

import toastr from '../../../helpers/toastr';
import styles from './style.module.css';

const AdminPanelEditor = ({ loading, setPost }) => {
  const [editor, setEditor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isDescriptionError, setDescriptionError] = useState(false);
  const [tags, setTags] = useState('');

  const handlerInput = ({ target }) => {
    switch (target.name) {
      case 'title':
        setTitle(target.value);
        break;

      case 'description':
        setDescription(target.value);
        setDescriptionError(false);
        break;

      case 'tags':
        setTags(target.value);
        break;

      default:
        break;
    }
  };

  const handlerEditor = data => setEditor(data.toJSON());
  const handleSetPost = () => {
    if (
      !title.length ||
      (!description.length || description.length > 150) ||
      !editor.document.nodes[0].nodes[0].leaves[0].text.length
    ) {
      return toastr('error', 'Проверьте все обязательные поля поля');
    }

    if (description.length > 150) {
      setDescriptionError(true);
      return toastr('error', 'Превышен лимит описания');
    }

    const postData = {
      title,
      description,
      tags,
      editor,
    };

    return setPost(postData);
  };

  return (
    <div className={styles.editorWrap}>
      <TextField
        autoComplete="off"
        onChange={handlerInput}
        className={styles.textField}
        label="Заголовок:"
        placeholder="Двенадцать дней и семь ночей..."
        margin="normal"
        name="title"
        value={title}
        required
      />
      <TextField
        autoComplete="off"
        onChange={handlerInput}
        className={styles.textField}
        label={`Описание: ${
          description.length ? 150 - description.length : ''
        }`}
        placeholder="Максимум 150 символов"
        margin="normal"
        name="description"
        value={description}
        required
        error={isDescriptionError || description.length > 150}
      />
      <TextField
        autoComplete="off"
        onChange={handlerInput}
        className={styles.textField}
        label="Тэги:"
        placeholder="Тэги вводить через запятую."
        margin="normal"
        name="tags"
        value={tags}
      />
      <Editor
        // value={initialValue}
        callback={handlerEditor}
        placeholder="Type your story..."
        ImgWrapper={EditorImageWrapper}
      />

      <Loader loading={loading} />

      <Tooltip title="Отправить" placement="bottom">
        <Button
          aria-label="Add"
          size="medium"
          onClick={handleSetPost}
          type="submit"
          variant="contained"
          color="primary"
          style={{ margin: '15px 0', minWidth: '100px' }}
        >
          <AddIcon />
        </Button>
      </Tooltip>
    </div>
  );
};

AdminPanelEditor.propTypes = {
  // data: PropTypes.string,
  setPost: PropTypes.func,
  loading: PropTypes.bool,
};

export default AdminPanelEditor;
