/**
 * @flow
 * AdminPanelPage - component
 */

import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import { type Props, type State, type SendModelType } from './model';
import SendPostForm from '../../elements/SendPostForm';
import './index.css';

export default class Home extends Component<Props, State> {
  componentDidMount() {}

  render() {
    const { loading } = this.props;
    return (
      <div className="admin-panel">
        <PulseLoader
          className="admin-panel__loader"
          sizeUnit="px"
          color="#36D7B7"
          loading={loading}
        />
        <div className="admin-panel__wrapper">
          <SendPostForm onSend={this.props.setPost} />
        </div>
      </div>
    );
  }
}
