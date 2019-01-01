/**
 * @flow
 * Post model
 */

export type Props = {
  getPost: (id: string) => {},
  data: PostDataType,
  error: '',
  loading: boolean,

  match: {
    params: {
      id: string,
    },
  },
};

export type State = {};

// TODO --- EDIT THIS PLACEHOLDER DATA
export type PostDataType = {
  userId?: number,
  id?: number,
  title?: string,
  body?: string,
};
