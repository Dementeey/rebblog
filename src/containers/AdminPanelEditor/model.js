/**
 * @flow
 * AdminPanelPage - model
 */

export type Props = {
  setPost: () => {},
  setCurrentPhoto: (obj: any) => void,
  getPhoto: (str: string) => void,
  data: [],
  error: '',
  loading: boolean,
  photos: PhotosType,
};

export type State = {
  isOpen: boolean,
};

export type PhotosType = {
  data: [],
  error: string,
  loading: boolean,
};

export type SendModelType = {
  author: string,
  createdAt: string,
  postId: string | number,
  title: string,
  img?: string,
  description: string,
};
