/**
 * @flow
 * Post component
 */

import React, { Component } from 'react';
import { type Props, type State } from './model';

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
          {loading && 'Loading...'}
          {data.body}
        </section>
      </div>
    );
  }
}
