/**
 * @flow
 * Post model
 */

export type Props = {
  getPost: (id: string) => {},
  data: Array<PostDataType>,
  error: '',
  loading: boolean,

  match: {
    params: {
      id: string,
    },
  },
};

export type State = {};

export type PostDataType = {
  author: string,
  createdAt: string,
  postId: string | number,
  title: string,
  img?: string,
  description: string,
};
