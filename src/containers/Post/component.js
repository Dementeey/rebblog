// @flow

/**
 * Post component
 */

import React, { Component } from 'react';

export default class Post extends Component {
  componentDidMount() {
    console.log('================={}===================');
    console.log(this.props);
    console.log('====================================');
  }

  render() {
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    const { match } = this.props;
    return (
      <div className="about__wrapper">
        <p>POST #{match.params.id}</p>
      </div>
    );
  }
}
