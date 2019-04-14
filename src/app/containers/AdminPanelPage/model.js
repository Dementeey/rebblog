/**
 * @flow
 * AdminPanelPage - model
 */

export type Props = {
  setPost: () => {},
  data: [],
  error: '',
  loading: boolean,
  history: {
    push: (path: string) => {},
  },
};

export type State = {};
