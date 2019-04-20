/**
 * AdminPanelPage - component
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';

import './style.module.css';

export default class AdminPanelPage extends Component {
  componentDidMount() {}

  openEditor = () => this.props.history.push('/panel/edit');

  render() {
    const { loading } = this.props;
    return (
      <div className="admin-panel">
        <PulseLoader
          className="page-loader"
          sizeUnit="px"
          color="#36D7B7"
          loading={loading}
        />
        <div className="admin-panel__wrapper">
          <Tooltip title="Добавить новый пост" placement="bottom">
            <Button
              aria-label="Add"
              size="medium"
              onClick={this.openEditor}
              type="submit"
              variant="contained"
              color="primary"
              style={{ margin: '15px 0' }}
            >
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    );
  }
}

AdminPanelPage.propTypes = {
  history: PropTypes.object,
  loading: PropTypes.bool,
};
