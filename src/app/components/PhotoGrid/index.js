import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import * as Icons from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import Loader from '../Loader';

import styles from './style';

const TitlebarGridList = ({
  classes,
  onClose,
  data,
  loading,
  getPhotoNext,
  getPhotoPrev,
  setCurrentPhoto,
  nextUrl,
  prevUrl,
  getPhoto,
  error = '',
  isOpen = false,
}) => {
  const currentPage = () => {
    const newPage = nextUrl.match(/page=([0-9]*)/) || '';
    const prevPage = prevUrl.match(/page=([0-9]*)/) || '';

    const prev = prevPage && +prevPage[1] + 1;
    const current = newPage && newPage[1] - 1;
    const result = current || prev;

    return `${result}`;
  };

  const handleKeyPress = e => {
    if (e.ctrlKey && e.key === 'Enter') {
      getPhoto(e.currentTarget.value, '1', 'landscape');

      return e.currentTarget.value;
    }
  };

  const renderGrid = () => (
    <div className={classes.root}>
      <Loader loading={loading} />

      <div className={classes.headerRow}>
        <TextField
          type="search"
          autoComplete="off"
          id="standard-search"
          onKeyPress={handleKeyPress}
          className={classes.textField}
          label="Загрузить фото с unsplash.com"
          placeholder="Пример: italy, moto, apple, и нажмите 'ctrl + Enter'"
        />
        <div className={classes.close}>
          <Tooltip title="Закрыть" placement="top">
            <Fab color="secondary" size="small" onClick={onClose}>
              <Icons.CloseOutlined />
            </Fab>
          </Tooltip>
        </div>
      </div>
      {error.length > 0 && (
        <p className={classes.noData}>По этому запросу данных нет</p>
      )}
      {data.length > 0 && (
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader
              className={classes.paginationWrap}
              component="div"
              color="primary"
            >
              <span>Выберите одну фотографию</span>
              <div className={classes.pagination}>
                <Tooltip title="prev" placement="bottom">
                  <Fab
                    color="primary"
                    size="small"
                    onClick={() => getPhotoPrev(prevUrl)}
                    disabled={!prevUrl}
                  >
                    <Icons.NavigateBefore />
                  </Fab>
                </Tooltip>

                <Fab size="small" variant="extended" disabled>
                  {currentPage()}
                </Fab>

                <Tooltip title="next" placement="bottom">
                  <Fab
                    color="primary"
                    size="small"
                    onClick={() => getPhotoNext(nextUrl)}
                    disabled={!nextUrl}
                  >
                    <Icons.NavigateNext />
                  </Fab>
                </Tooltip>
              </div>
            </ListSubheader>
          </GridListTile>

          {data.map(item => (
            <GridListTile key={item.id}>
              <img
                role="presentation"
                src={item.urls.small}
                alt={item.description || 'Photo'}
                onClick={() => {
                  setCurrentPhoto(item);
                  onClose();
                }}
              />
              <GridListTileBar
                title={item.description || 'Photo'}
                subtitle={
                  <Tooltip
                    title={`Перейти на unsplash.com/@${item.user.username}`}
                    placement="bottom"
                  >
                    <a
                      className={classes.link}
                      rel="noopener noreferrer"
                      href={item.user.links.html}
                      target="_blank"
                    >
                      by: {item.user.name}
                    </a>
                  </Tooltip>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      )}
    </div>
  );

  return isOpen && renderGrid();
};

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  getPhoto: PropTypes.func,
  getPhotoNext: PropTypes.func,
  getPhotoPrev: PropTypes.func,
  setCurrentPhoto: PropTypes.func,
  data: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
  isOpen: PropTypes.bool,
  nextUrl: PropTypes.any,
  prevUrl: PropTypes.any,
};

export default withStyles(styles)(TitlebarGridList);
