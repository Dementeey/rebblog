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
  currentPhoto: CurrentPhotoType,
};

export type SendModelType = {
  author: string,
  createdAt: string,
  postId: string | number,
  title: string,
  img?: string,
  description: string,
};

export type CurrentPhotoType = {
  id: string,
  created_at: string,
  updated_at: string,
  width: number,
  height: 5472,
  color: string,
  description: ?string,
  urls: {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string,
  },
  links: {
    self: string,
    html: string,
    download: string,
    download_location: string,
  },
  categories: Array<any>,
  sponsored: boolean,
  sponsored_by: any,
  sponsored_impressions_id: any,
  likes: number,
  liked_by_user: boolean,
  current_user_collections: Array<any>,
  slug: any,
  user: {
    id: string,
    updated_at: string,
    username: string,
    name: string,
    first_name: string,
    last_name: string,
    twitter_username: ?string,
    portfolio_url: string,
    bio: any,
    location: string,
    links: {
      self: string,
      html: string,
      photos: string,
      likes: string,
      portfolio: string,
      following: string,
      followers: string,
    },
    profile_image: {
      small: string,
      medium: string,
      large: string,
    },
    instagram_username: string,
    total_collections: number,
    total_likes: number,
    total_photos: number,
    accepted_tos: boolean,
  },
};
