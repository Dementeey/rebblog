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
    const { loading, photos, getPhoto, setCurrentPhoto } = this.props;
    const { isOpen } = this.state;

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
