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
    const { match, post } = this.props;
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    return (
      <div className="about__wrapper">
        <p>POST #{match.params.id}</p>

        <header>
          <h2>{post.data.title}</h2>
        </header>

        <section>{post.data.body}</section>
      </div>
    );
  }
}
