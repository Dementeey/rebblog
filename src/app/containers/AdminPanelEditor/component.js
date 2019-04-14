/**
 * AdminPanelEditor - component
 */

import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import Fab from '@material-ui/core/Fab';
import * as Icons from '@material-ui/icons';
import Fade from '@material-ui/core/Fade';
import PhotoGrid from '../../components/PhotoGrid';

import './index.css';

export default class AdminPanelEditor extends Component {
  state = {
    isOpen: false,
    isOpenAddBox: false,
    bodyPost: [],
    countTextBox: 1,
  };

  addTextInBodyPost = () => {
    this.setState(prevState => ({
      bodyPost: prevState.bodyPost.concat(
        '-t',
        `id:${prevState.countTextBox}`,
        ''
      ),
      countTextBox: prevState.countTextBox + 1,
    }));
  };

  addPhotoInBodyPost = (borderBottomStyle, body) => {
    this.setState(prevState => ({
      bodyPost: prevState.bodyPost.concat('-img', body),
    }));
  };

  removeItem = (flag, body, e) => {
    if (flag === '-img') {
      this.setState(prevState => {
        const indexStart = prevState.bodyPost.indexOf(body) - 1;
        prevState.bodyPost.splice(indexStart, 2);
        return {
          bodyPost: prevState.bodyPost,
        };
      });
    }

    if (flag === '-t') {
      this.setState(prevState => {
        const indexStart = prevState.bodyPost.indexOf(body) - 2;
        prevState.bodyPost.splice(indexStart, 3);
        return {
          bodyPost: prevState.bodyPost,
        };
      });
    }
  };

  onChangeTextInBodyPost = (e, id) => {
    const text = e.currentTarget.textContent;

    this.setState(prevState => {
      const indexStart = prevState.bodyPost.indexOf(id) + 1;
      prevState.bodyPost.splice(indexStart, 1, text);
      return {
        bodyPost: prevState.bodyPost,
      };
    });
  };

  handleClose = () => this.setState({ isOpen: false });

  handleOpen = () => this.setState({ isOpen: true });

  handleTogleAddBox = () => {
    this.setState(prevState => ({
      isOpenAddBox: !prevState.isOpenAddBox,
    }));
  };

  render() {
    const {
      loading,
      photos,
      // getPhoto,
      getPhotoPrev,
      getPhotoNext,
      setCurrentPhoto,
      // setPost,
    } = this.props;
    const { isOpen, isOpenAddBox, bodyPost } = this.state;

    const getUrl = str => {
      const { paginationUrls } = photos;

      if (!paginationUrls.length) return '';

      const filtered = paginationUrls.filter(item => item.match(str))[0];
      const result = filtered && filtered.match(/<(.*)>/);

      return result ? result[1] : '';
    };

    console.log('==========RENDER==========================');
    console.log(bodyPost);
    console.log('====================================');
    return (
      <div className="admin-panel">
        <PulseLoader
          className="admin-panel__loader"
          sizeUnit="px"
          color="#36D7B7"
          loading={loading}
        />

        <div className="admin-panel__wrapper">
          {isOpen && (
            <Fade in={isOpen}>
              <div className="admin-panel__modal">
                <Fab
                  style={{ position: 'absolute', right: '-50px' }}
                  size="small"
                  color="secondary"
                  onClick={this.handleClose}
                  variant="round"
                >
                  <Icons.CloseOutlined />
                </Fab>

                <PhotoGrid
                  prevUrl={getUrl('prev')}
                  nextUrl={getUrl('next')}
                  getPhotoNext={getPhotoNext}
                  getPhotoPrev={getPhotoPrev}
                  setCurrentPhoto={setCurrentPhoto}
                  data={photos.data}
                  loading={photos.loading}
                  onClose={this.handleClose}
                />
              </div>
            </Fade>
          )}
          <div className="admin-editor__add-box-wrap">
            <Fab
              size="small"
              color="secondary"
              onClick={this.handleTogleAddBox}
            >
              <Icons.AddOutlined />
            </Fab>

            {isOpenAddBox && (
              <div className="admin-editor__add-box">
                <button type="button" onClick={() => this.addTextInBodyPost()}>
                  <Icons.NoteAddOutlined color="primary" />
                </button>

                <button type="button" onClick={() => this.addPhotoInBodyPost()}>
                  <Icons.ImageSearchOutlined color="primary" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
