import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddPhotoIcon from '@material-ui/icons/AddAPhotoOutlined';
import ImageSearchIcon from '@material-ui/icons/ImageSearchOutlined';
import PhotoGrid from '../../components/PhotoGrid';
import stylesModule from './style.module.css';

const EditorImageWrapper = ({
  children,
  getPhoto,
  setCurrentPhoto,
  getPhotoNext,
  getPhotoPrev,
  photos,
}) => {
  const [open, setOpen] = useState(false);
  const [isOpenPhotoGrid, setOpenPhotoGrid] = useState(false);
  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const onClosePhotoGrid = () => setOpenPhotoGrid(false);
  const handleClickSearcBth = () => {
    setOpenPhotoGrid(true);
    handleClose();
  };

  return (
    <div>
      <button className={stylesModule.btn} onClick={handleToggle}>
        {children}
      </button>

      <Popper open={open} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={stylesModule.menu}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <Tooltip title="Добавить по ссылке" placement="bottom">
                    <Button disabled onClick={handleClose}>
                      <AddPhotoIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Выбрать на Unsplash" placement="bottom">
                    <Button onClick={handleClickSearcBth}>
                      <ImageSearchIcon />
                    </Button>
                  </Tooltip>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      <PhotoGrid
        isOpen={isOpenPhotoGrid}
        onClose={onClosePhotoGrid}
        getPhoto={getPhoto}
        getPhotoNext={getPhotoNext}
        getPhotoPrev={getPhotoPrev}
        setCurrentPhoto={setCurrentPhoto}
        data={photos.data}
        loading={photos.loading}
        nextUrl={photos.paginationUrls[0]}
        prevUrl={photos.paginationUrls[1]}
        error={photos.error}
      />
    </div>
  );
};

EditorImageWrapper.propTypes = {
  children: PropTypes.node,
  photos: PropTypes.object,
  getPhoto: PropTypes.func,
  getPhotoPrev: PropTypes.func,
  getPhotoNext: PropTypes.func,
  setCurrentPhoto: PropTypes.func,
};

export default EditorImageWrapper;
