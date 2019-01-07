import React from 'react';
import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Tooltip from '@material-ui/core/Tooltip';

import styles from './style';

const TitlebarGridList = ({
  classes,
  onClose,
  data,
  loading,
  setCurrentPhoto,
}) => (
  <div className={classes.root}>
    <GridList cellHeight={180} className={classes.gridList}>
      <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        <ListSubheader component="div" color="primary">
          Выберите одну фотографию
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
  </div>
);

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  setCurrentPhoto: PropTypes.func,
  data: PropTypes.array,
  loading: PropTypes.bool,
};

export default withStyles(styles)(TitlebarGridList);
