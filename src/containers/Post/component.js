/**
 * @flow
 * Post component
 */

import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import { type Props, type State } from './model';
import './index.css';

export default class Post extends Component<Props, State> {
  componentDidMount() {
    const { getPost, match } = this.props;
    getPost(match.params.id);
  }

  render() {
    const { match, data, loading } = this.props;

    return (
      <div className="about__wrapper">
        <p>POST #{match.params.id}</p>

        <header>
          <h2>{data.title}</h2>
        </header>

        <section>
          <PulseLoader
            className="post__loader"
            sizeUnit="px"
            color="#36D7B7"
            loading
          />

          {loading && 'Loading...'}
          {data.body}
        </section>
      </div>
    );
  }
}
