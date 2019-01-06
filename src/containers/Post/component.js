/**
 * @flow
 * Post - component
 */

import React, { Component } from 'react';
import moment from 'moment';
import { PulseLoader } from 'react-spinners';
import { type Props, type State, type PostDataType } from './model';
import './index.css';

export default class Post extends Component<Props, State> {
  componentDidMount() {
    const { getPost, match } = this.props;

    getPost(match.params.id);
  }

  renderPost = () => {
    const { data } = this.props;
    const currentData: Array<PostDataType> = data.filter(
      el => el.postId === this.props.match.params.id,
    );

    return (
      <div className="post">
        <header>
          <h1 className="post__title">{currentData[0].title}</h1>
          <p>{moment(currentData[0].createdAt).format('LL')}</p>
        </header>

        <section>{currentData[0].description}</section>
      </div>
    );
  };

  render() {
    const { loading } = this.props;
    return (
      <>
        <PulseLoader
          className="post__loader"
          sizeUnit="px"
          color="#36D7B7"
          loading={loading}
        />
        {!!this.props.data.length && this.renderPost()}
      </>
    );
  }
}
