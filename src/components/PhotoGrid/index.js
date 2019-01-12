import React from 'react';
import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import * as Icons from '@material-ui/icons';

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
}) => {
  const currentPage = () => {
    const newPage = nextUrl.match(/page=([0-9]*)/) || '';
    const prevPage = prevUrl.match(/page=([0-9]*)/) || '';

    const prev = prevPage && +prevPage[1] + 1;
    const current = newPage && newPage[1] - 1;
    const result = current || prev;

    return `${result}`;
  };

  return (
    <div className={classes.root}>
      {!data.length ? (
        <p className={classes.noData}>По этому запросу данных нет</p>
      ) : (
        data.length && (
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

            <PulseLoader
              className={classes.loader}
              sizeUnit="px"
              color="#36D7B7"
              loading={loading}
            />

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
        )
      )}
    </div>
  );
};

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  getPhotoNext: PropTypes.func,
  getPhotoPrev: PropTypes.func,
  setCurrentPhoto: PropTypes.func,
  data: PropTypes.array,
  loading: PropTypes.bool,
  nextUrl: PropTypes.any,
  prevUrl: PropTypes.any,
};

export default withStyles(styles)(TitlebarGridList);
