/**
 * Home - component
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import defaultImg from '../../../assets/images/notes.svg';
import './index.css';

export default class Home extends Component {
  componentDidMount() {
    if (!this.props.data.length) {
      this.props.getPosts();
    }
  }

  renderPosts = data =>
    data.map(post => (
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

  renderDefaultBlock = () =>
    Array.from({ length: 9 }).map((el, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={i} className="home-page__default">
        <p />
        <div />
        <p />
        <p />
        <p />
      </div>
    ));

  render() {
    const { data, loading } = this.props;

    return (
      <div className="home-page__posts-wrapper">
        {!loading && this.renderPosts(data)}

        <div className="home-page__default-wrapper">
          {loading && this.renderDefaultBlock()}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.object,
  getPosts: PropTypes.func,
  loading: PropTypes.bool,
};
