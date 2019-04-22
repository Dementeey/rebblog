/**
 * Post - component
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import Loader from '../../components/Loader';

import getDateRu from '../../../helpers/getDateRu';
import styles from './style.module.css';

export default class Post extends Component {
  componentDidMount() {
    const { getPost, match } = this.props;

    getPost(match.params.id);
  }

  renderPost = () => {
    const { data } = this.props;

    return (
      <article className={styles.post}>
        <header>
          <h1 className={styles.title}>{data.title}</h1>
          <p>{getDateRu(data.createdAt)}</p>
        </header>

        <section>{data.description}</section>

        <footer>
          <p>{getDateRu(data.updatedAt)}</p>
        </footer>
      </article>
    );
  };

  render() {
    const { loading } = this.props;
    return (
      <>
        <Loader loading={loading} />
        {!_isEmpty(this.props.data) && this.renderPost()}
      </>
    );
  }
}

Post.propTypes = {
  data: PropTypes.object,
  match: PropTypes.object,
  getPost: PropTypes.func,
  loading: PropTypes.bool,
};
