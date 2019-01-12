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

    const bodyPost: any = [
      '-t',
      'loremimpeditSint est officiis natus maxime veritatis quaerat aperiam consequatur repellat. In reprehenderit aspernatur est ex molestiae facilis facere. Ea aut exercitationem ut commodi assumenda quos. Sunt exercitationem et molestiae at amet nesciunt. Beatae quas rerum error. Voluptatibus et veniam sapiente labore ab iusto vitae.',
      '-img',
      {
        id: 'b6e21011-e8d2-4eac-8a29-bcd98115b6f0',
        description:
          'Autem deleniti labore dolores accusamus dolorem non ut consequatur velit.',
        urls: {
          regular:
            'https://images.unsplash.com/photo-1543362905-f2423ef4e0f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ5Nzg0fQ',
        },
        user: {
          name: 'voluptates',
          username: 'voluptates',
          links: {
            html: 'https://unsplash.com/@andrewruiz',
          },
        },
      },
      '-t',
      'loremimpedi12tSint est officiis natus maxime veritatis quaerat aperiam consequatur repellat. In reprehenderit aspernatur est ex molestiae facilis facere. Ea aut exercitationem ut commodi assumenda quos. Sunt exercitationem et molestiae at amet nesciunt. Beatae quas rerum error. Voluptatibus et veniam sapiente labore ab iusto vitae.',
    ];

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
            bodyPost={bodyPost}
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
