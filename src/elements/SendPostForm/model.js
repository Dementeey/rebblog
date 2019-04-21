/**
 * @flow
 * SendPostForm - model
 */

import { type CurrentPhotoType } from '../../containers/AdminPanelEditor/model';

export type Props = {
  onSend: (model: SendModelType) => {},
  onOpenUnsplash: () => void,
  getPhoto: (str: string, page: string, operation: string) => void,
  currentPhoto: CurrentPhotoType,
  bodyPost: Array<string | CurrentPhotoType>,
  removeItem: (flag: string, body: any) => void,
  onChangeTextInBodyPost: (e: any) => void,
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
  unsplashPhoto: any,
};

export type State = {};
