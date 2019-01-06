/**
 * @flow
 * AdminPanelPage - model
 */

export type Props = {
  setPost: () => {},
  data: [],
  error: '',
  loading: boolean,
};

export type State = {};

export type SendModelType = {
  author: string,
  createdAt: string,
  postId: string | number,
  title: string,
  img?: string,
  description: string,
};
