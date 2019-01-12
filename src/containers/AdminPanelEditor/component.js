/**
 * @flow
 * AdminPanelEditor - component
 */

import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import Fab from '@material-ui/core/Fab';
import * as Icons from '@material-ui/icons';
import Fade from '@material-ui/core/Fade';
import PhotoGrid from '../../components/PhotoGrid';

import { type Props, type State } from './model';
import SendPostForm from '../../elements/SendPostForm';
import './index.css';

export default class AdminPanelEditor extends Component<Props, State> {
  state = {
    isOpen: false,
  };

  handleClose = () => this.setState({ isOpen: false });

  handleOpen = () => this.setState({ isOpen: true });

  render() {
    const {
      loading,
      photos,
      getPhoto,
      getPhotoPrev,
      getPhotoNext,
      setCurrentPhoto,
    } = this.props;
    const { isOpen } = this.state;

    /**
     * this func search link
     * @param str need String
     */

    const getUrl = (str: string): string => {
      const { paginationUrls } = photos;

      if (!paginationUrls.length) return '';

      const filtered: string = paginationUrls.filter(item =>
        item.match(str),
      )[0];
      const result: any = filtered && filtered.match(/<(.*)>/);

      return result ? result[1] : '';
    };

    const currentPage = (): string => {
      const nextUrl: string = getUrl('next');
      const prevUrl: string = getUrl('prev');

      const newPage: string | Array<string> =
        nextUrl.match(/page=([0-9]*)/) || '';
      const prevPage: string | Array<string> =
        prevUrl.match(/page=([0-9]*)/) || '';

      const prev: string | number = prevPage && +prevPage[1] + 1;
      const current: string | number = newPage && newPage[1] - 1;
      const result = current || prev;

      return `${result}`;
    };

    return (
      <div className="admin-panel">
        <PulseLoader
          className="admin-panel__loader"
          sizeUnit="px"
          color="#36D7B7"
          loading={loading}
        />

        <div className="admin-panel__wrapper">
          <SendPostForm
            onSend={this.props.setPost}
            onOpenUnsplash={this.handleOpen}
            getPhoto={getPhoto}
            currentPhoto={photos.currentPhoto}
          />

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
                  currentPage={currentPage()}
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
        </div>
      </div>
    );
  }
}
