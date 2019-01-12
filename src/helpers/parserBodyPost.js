import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import * as Icons from '@material-ui/icons';

export default data =>
  data.map((item, index, arr) => {
    if (item === '-img') {
      const imgObj = arr[index + 1];

      return (
        <div key={imgObj.id} className="admin-editor__label">
          <Tooltip title="Удалить изображение" placement="bottom">
            <Icons.DeleteForeverOutlined
              color="primary"
              style={{ cursor: 'pointer' }}
            />
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
        <div key={arr[index + 1].length} className="admin-editor__label">
          <Tooltip title="Удалить текст" placement="bottom">
            <Icons.DeleteForeverOutlined
              style={{ marginTop: '12px', cursor: 'pointer' }}
              color="primary"
            />
          </Tooltip>

          <p className="admin-editor__text-input" contentEditable="">
            {arr[index + 1]}
          </p>
        </div>
      );
    }
  });
