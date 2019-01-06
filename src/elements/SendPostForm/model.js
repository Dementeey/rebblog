/**
 * @flow
 * SendPostForm - model
 */

export type Props = {
  onSend: (model: SendModelType) => {},
};

export type SendModelType = {
  description: string,
  tags: string | Array<string>,
  text: string,
  title: string,
};

export type ModelType = {
  description: string,
  tags: string,
  text: string,
  title: string,
};

export type State = {};
