/**
 * Home component
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../images/notes.svg';

// TODO --- remove test data

// const data = [
//   {
//     id: 1,
//     title: 'Первый пост',
//     createdAt: new Date().toDateString(),
//     description:
//       'Et numquam inventore possimus. Harum consectetur nesciunt. Dolore iure dolores.Eveniet nemo consequuntur non aperiam dolore ipsa. Consequuntur sint quis at error velit.',
//     author: 'Anna Eichmann',
//     img:
//       'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MDggNTA4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDggNTA4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojOTBERkFBOyIgY3g9IjI1NCIgY3k9IjI1NCIgcj0iMjU0Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzMjRBNUU7IiBkPSJNMzA3LjYsMTMwLjhjLTQuOCwwLTkuMiwxLjYtMTIuNCw0LjhWOTJjMC01LjYtNC44LTEwLjQtMTAuNC0xMC40SDI0MmMyLjgsMy4yLDQuOCw3LjYsNC44LDEyLjQgIGMwLDEwLjQtOC40LDE5LjItMTkuMiwxOS4yYy0xMC40LDAtMTkuMi04LjQtMTkuMi0xOS4yYzAtNC44LDEuNi05LjIsNC44LTEyLjRoLTQyLjhjLTUuNiwwLTEwLjQsNC44LTEwLjQsMTAuNHY0My42ICBjMy4yLTIuOCw3LjYtNC44LDEyLjQtNC44YzEwLjQsMCwxOS4yLDguNCwxOS4yLDE5LjJjMCwxMC40LTguNCwxOS4yLTE5LjIsMTkuMmMtNC44LDAtOS4yLTEuNi0xMi40LTQuOFYyMDYgIGMwLDUuNiw0LjgsMTAuNCwxMC40LDEwLjRoNDIuOGMtMi44LDMuMi00LjgsNy42LTQuOCwxMi40YzAsMTAuNCw4LjQsMTkuMiwxOS4yLDE5LjJjMTAuNCwwLDE5LjItOC40LDE5LjItMTkuMiAgYzAtNC44LTEuNi05LjItNC44LTEyLjRoNDIuOGM1LjYsMCwxMC40LTQuOCwxMC40LTEwLjR2LTQxLjZjMy4yLDIuOCw3LjYsNC44LDEyLjQsNC44YzEwLjQsMCwxOS4yLTguNCwxOS4yLTE5LjIgIEMzMjYuOCwxMzkuNiwzMTgsMTMwLjgsMzA3LjYsMTMwLjh6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNNDM0LDI5OC44Yy0zLjYtMy4yLTgtNS4yLTEyLjQtNS4yTDQ1MiwyNjJjNC00LDQtMTAuOC0wLjQtMTQuNEw0MjAuOCwyMThjLTAuNCw0LjQtMiw4LjgtNS4yLDEyICBjLTcuMiw3LjYtMTkuMiw3LjYtMjYuOCwwLjRjLTcuNi03LjItNy42LTE5LjItMC40LTI2LjhjMy4yLTMuNiw3LjYtNS4yLDEyLTUuNkwzNzAsMTY3LjZjLTQtNC0xMC44LTQtMTQuNCwwLjRsLTMwLjQsMzEuNiAgYzQuNCwwLjQsOC44LDIsMTIuNCw1LjJjNy42LDcuMiw3LjYsMTkuMiwwLjQsMjYuOHMtMTkuMiw3LjYtMjYuOCwwLjRjLTMuNi0zLjItNS4yLTcuNi01LjYtMTJsLTMwLDMwYy00LDQtNCwxMC44LDAuNCwxNC40ICBsMzAuOCwyOS42Yy00LjQsMC40LTguOCwyLjQtMTIsNS42Yy03LjIsNy42LTcuMiwxOS42LDAuNCwyNi44YzcuNiw3LjIsMTkuNiw3LjIsMjYuOC0wLjRjMy4yLTMuNiw1LjItNy42LDUuMi0xMi40bDMwLjgsMjkuNiAgYzQsNCwxMC44LDQsMTQuNC0wLjRsMjkuMi0zMGMwLjQsNC40LDIuNCw4LjgsNS42LDEyYzcuNiw3LjIsMTkuNiw3LjIsMjYuOC0wLjRDNDQxLjYsMzE4LDQ0MS42LDMwNiw0MzQsMjk4Ljh6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRjcwNTg7IiBkPSJNMjQ0LDM2NC40Yy0zLjYtMy4yLTgtNS4yLTEyLjQtNS4ybDMwLjQtMzEuNmM0LTQsNC0xMC44LTAuNC0xNC40bC0zMC44LTI5LjZjLTAuNCw0LjQtMiw4LjgtNS4yLDEyICBjLTcuMiw3LjYtMTkuMiw3LjYtMjYuOCwwLjRzLTcuNi0xOS4yLTAuNC0yNi44YzMuMi0zLjYsNy42LTUuMiwxMi01LjZMMTc5LjYsMjM0Yy00LTQtMTAuOC00LTE0LjQsMC40TDEzNC44LDI2NiAgYzQuNCwwLjQsOC44LDIsMTIuNCw1LjJjNy42LDcuMiw3LjYsMTkuMiwwLjQsMjYuOGMtNy4yLDcuNi0xOS4yLDcuNi0yNi44LDAuNGMtMy42LTMuMi01LjItNy42LTUuNi0xMmwtMjkuMiwzMCAgYy00LDQtNCwxMC44LDAuNCwxNC40bDMwLjgsMjkuNmMtNC40LDAuNC04LjgsMi40LTEyLDUuNmMtNy4yLDcuNi03LjIsMTkuNiwwLjQsMjYuOGM3LjYsNy4yLDE5LjYsNy4yLDI2LjgtMC40ICBjMy4yLTMuNiw1LjItNy42LDUuMi0xMi40bDMwLjgsMjkuNmM0LDQsMTAuOCw0LDE0LjQtMC40bDI5LjItMzBjMC40LDQuNCwyLjQsOC44LDUuNiwxMmM3LjYsNy4yLDE5LjYsNy4yLDI2LjgtMC40ICBDMjUxLjYsMzg0LDI1MS42LDM3MS42LDI0NCwzNjQuNHoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
//   },
//   {
//     id: 2,
//     title: 'Второй пост',
//     createdAt: new Date().toDateString(),
//     description:
//       'Et numquam inventore possimus. Harum consectetur nesciunt. Dolore iure dolores.Eveniet nemo consequuntur non aperiam dolore ipsa. Consequuntur sint quis at error velit.',
//     author: 'Anna Eichmann',
//     img: '',
//   },
//   {
//     id: 3,
//     title: 'Третий пост',
//     createdAt: new Date().toDateString(),
//     description:
//       'Et numquam inventore possimus. Harum consectetur nesciunt. Dolore iure dolores.Eveniet nemo consequuntur non aperiam dolore ipsa. Consequuntur sint quis at error velit.',
//     author: 'Anna Eichmann',
//     img: '',
//   },
// ];

const defaultWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  margin: '0 auto',
  alignItems: 'center',
};

const defaultPostStyle = {
  ...defaultWrapperStyle,

  margin: '10px',
  border: '1px solid #262626',
};

const defaultContentStyle = {
  ...defaultWrapperStyle,
  width: '100%',
  padding: '20px 10px',
  textAlign: 'center',
};

export default class Home extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderPosts = data =>
    data.map(post => (
      <article
        key={post.id}
        className="home-page__post"
        style={defaultPostStyle}
      >
        <header>
          <h2>{post.title}</h2>
        </header>

        <section style={defaultContentStyle}>
          <img
            src={post.img || defaultImg}
            alt="post_image"
            style={{ maxWidth: '100px' }}
          />
          <p>{post.description}</p>
        </section>

        <footer>
          <p>Автор: {post.author}</p>
          <p>Написан: {post.createdAt}</p>
          <Link to={`/post/${post.id}`}>Читать больше</Link>
        </footer>
      </article>
    ));

  TESTrenderPosts = data =>
    data.map(post => (
      <article
        key={post.id}
        className="home-page__post"
        style={defaultPostStyle}
      >
        <header>
          <h2>{post.title}</h2>
        </header>

        <section style={defaultContentStyle}>
          <img
            src={post.img || defaultImg}
            alt="post_image"
            style={{ maxWidth: '100px' }}
          />
          <p>{post.body.slice(0, 50)}</p>
        </section>

        <footer>
          <p>Автор: {post.userId}</p>
          <p>Написан: {post.createdAt}</p>
          <Link to={`/post/${post.id}`}>Читать больше</Link>
        </footer>
      </article>
    ));

  render() {
    const { data, loading } = this.props;

    return (
      <div className="home-page__wrapper" style={defaultWrapperStyle}>
        {/* {this.renderPosts(data)} */}
        {loading ? 'Loading...' : this.TESTrenderPosts(data)}
      </div>
    );
  }
}
