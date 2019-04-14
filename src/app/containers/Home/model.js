/**
 * @flow
 * Home - model
 */
import { RouteComponentProps } from '@reach/router'

export type Props = {
  getPosts: () => {},
  data: Array<PostsType>,
  error: '',
  loading: boolean,
}

export type State = {}

export type PostsType = {
  author: string,
  createdAt: string,
  postId: string | number,
  title: string,
  img?: string,
  description: string,
}
