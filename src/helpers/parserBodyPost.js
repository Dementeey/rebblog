import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import * as Icons from '@material-ui/icons';

export default (data, removeItem, onChangeTextInBodyPost) =>
  data.map((item, index, arr) => {
    if (item === '-img') {
      const imgObj = arr[index + 1];

      return (
        <div key={imgObj.id} className="admin-editor__label">
          <Tooltip title="Удалить изображение" placement="bottom">
            <button
              type="button"
              className="admin-editor__btn-remove"
              onClick={() => removeItem('-img', arr[index + 1])}
            >
              <Icons.DeleteForeverOutlined
                color="primary"
                style={{ cursor: 'pointer' }}
              />
            </button>
          </Tooltip>

          <div className="admin-editor__img-wrap">
            <img
              src={imgObj.urls.regular}
              alt={imgObj.description || 'photo'}
            />

            <div className="admin-editor__img-descr">
              <Tooltip
                title={`Перейти на unsplash.com/@${imgObj.user.username}`}
                placement="bottom"
              >
                <a
                  className="admin-editor__img-link"
                  rel="noopener noreferrer"
                  href={imgObj.user.links.html}
                  target="_blank"
                >
                  Photo by: {imgObj.user.name}
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
      );
    }

    if (item === '-t') {
      return (
        <div
          key={arr[index + 1].length + Math.random()}
          className="admin-editor__label"
        >
          <Tooltip title="Удалить текст" placement="bottom">
            <button
              type="button"
              className="admin-editor__btn-remove"
              onClick={() => removeItem('-t', arr[index + 2])}
            >
              <Icons.DeleteForeverOutlined
                style={{ marginTop: '12px', cursor: 'pointer' }}
                color="primary"
              />
            </button>
          </Tooltip>

          <p
            onBlur={e => onChangeTextInBodyPost(e, arr[index + 1])}
            className="admin-editor__text-input"
            contentEditable=""
          >
            {arr[index + 2]}
          </p>
        </div>
      );
    }
  });
