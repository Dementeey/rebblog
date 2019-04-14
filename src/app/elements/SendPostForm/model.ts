/**
 * @flow
 * SendPostForm - model
 */

import { CurrentPhotoType type } from '../../containers/AdminPanelEditor/model'

export interface Props {
  onSend: (model: SendModelType) => {},
  onOpenUnsplash: () => void,
  getPhoto: (str: string, page: string, operation: string) => void,
  currentPhoto: CurrentPhotoType,
  bodyPost: Array<string | CurrentPhotoType>,
  removeItem: (flag: string, body: any) => void,
  onChangeTextInBodyPost: (e: any) => void,
}

export interface SendModelType {
  description: string,
  tags: string | string[],
  text: string,
  title: string,
}

export interface ModelType {
  description: string,
  tags: string,
  text: string,
  title: string,
  unsplashPhoto: any,
}

export interface State {}
