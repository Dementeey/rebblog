/**
 * @flow
 * Home - component
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { type Props, type State } from './model';

import defaultImg from '../../images/notes.svg';
import './index.css';

export default class Home extends Component<Props, State> {
  componentDidMount() {
    this.props.getPosts();
  }

  get renderPosts(): any {
    const { data } = this.props;

    return data.map(post => (
      <article key={post.postId} className="home-page__post">
        <header>
          <h2 className="home-page__post-title">{post.title}</h2>
        </header>

        <section className="home-page__post-section">
          <img
            className="home-page__post-img"
            src={post.img || defaultImg}
            alt="post_image"
          />
          <p>{post.description || ''}</p>
        </section>

        <footer>
          <p className="home-page__post-author">Автор: {post.author}</p>
          <p className="home-page__post-date">Написан: {post.createdAt}</p>
          <Link className="btn home-page__post-btn" to={`/post/${post.postId}`}>
            Читать больше...
          </Link>
        </footer>
      </article>
    ));
  }

  render() {
    const { loading } = this.props;

    return (
      <div className="home-page__posts-wrapper">
        {loading ? 'Loading...' : this.renderPosts}
      </div>
    );
  }
}
