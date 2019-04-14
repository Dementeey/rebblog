/**
 * @flow
 * AdminPanelEditor - component
 */

import React, { Component } from 'react'
import { PulseLoader } from 'react-spinners'
import Fab from '@material-ui/core/Fab'
import * as Icons from '@material-ui/icons'
import Fade from '@material-ui/core/Fade'
import PhotoGrid from '../../components/PhotoGrid'

import { type Props, type State } from './model'
import SendPostForm from '../../elements/SendPostForm'
import './index.css'

const mockImg = {
  id: 'b6e21011-e8d2-4eac-8a29-bcd98115b6f0',
  description:
    'Autem deleniti labore dolores accusamus dolorem non ut consequatur velit.',
  urls: {
    regular:
      'https://images.unsplash.com/photo-1543362905-f2423ef4e0f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ5Nzg0fQ',
  },
  user: {
    name: 'voluptates',
    username: 'voluptates',
    links: {
      html: 'https://unsplash.com/@andrewruiz',
    },
  },
}

const bodyPostTest: any = [
  '-t',
  'loremimpeditSint est officiis natus maxime veritatis quaerat aperiam consequatur repellat. In reprehenderit aspernatur est ex molestiae facilis facere. Ea aut exercitationem ut commodi assumenda quos. Sunt exercitationem et molestiae at amet nesciunt. Beatae quas rerum error. Voluptatibus et veniam sapiente labore ab iusto vitae.',
  '-img',
  {
    id: 'b6e21011-e8d2-4eac-8a29-bcd98115b6f0',
    description:
      'Autem deleniti labore dolores accusamus dolorem non ut consequatur velit.',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1543362905-f2423ef4e0f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ5Nzg0fQ',
    },
    user: {
      name: 'voluptates',
      username: 'voluptates',
      links: {
        html: 'https://unsplash.com/@andrewruiz',
      },
    },
  },
  '-t',
  'loremimpedi12tSint est officiis natus maxime veritatis quaerat aperiam consequatur repellat. In reprehenderit aspernatur est ex molestiae facilis facere. Ea aut exercitationem ut commodi assumenda quos. Sunt exercitationem et molestiae at amet nesciunt. Beatae quas rerum error. Voluptatibus et veniam sapiente labore ab iusto vitae.',
]

export default class AdminPanelEditor extends Component<Props, State> {
  state = {
    isOpen: false,
    isOpenAddBox: false,
    bodyPost: [],
    countTextBox: 1,
  }

  addTextInBodyPost = (): void => {
    this.setState(prevState => ({
      bodyPost: prevState.bodyPost.concat(
        '-t',
        `id:${prevState.countTextBox}`,
        ''
      ),
      countTextBox: prevState.countTextBox + 1,
    }))
  }

  addPhotoInBodyPost = (body: string): void => {
    this.setState(prevState => ({
      bodyPost: prevState.bodyPost.concat('-img', body),
    }))
  }

  removeItem = (flag: string, body: any, e: any) => {
    if (flag === '-img') {
      this.setState(prevState => {
        const indexStart: number = prevState.bodyPost.indexOf(body) - 1
        prevState.bodyPost.splice(indexStart, 2)
        return {
          bodyPost: prevState.bodyPost,
        }
      })
    }

    if (flag === '-t') {
      this.setState(prevState => {
        const indexStart: number = prevState.bodyPost.indexOf(body) - 2
        prevState.bodyPost.splice(indexStart, 3)
        return {
          bodyPost: prevState.bodyPost,
        }
      })
    }
  }

  onChangeTextInBodyPost = (e: any, id: number) => {
    const text: string = e.currentTarget.textContent

    this.setState(prevState => {
      const indexStart: number = prevState.bodyPost.indexOf(id) + 1
      prevState.bodyPost.splice(indexStart, 1, text)
      return {
        bodyPost: prevState.bodyPost,
      }
    })
  }

  handleClose = () => this.setState({ isOpen: false })

  handleOpen = () => this.setState({ isOpen: true })

  handleTogleAddBox = () => {
    this.setState(prevState => ({
      isOpenAddBox: !prevState.isOpenAddBox,
    }))
  }

  render() {
    const {
      loading,
      photos,
      getPhoto,
      getPhotoPrev,
      getPhotoNext,
      setCurrentPhoto,
      setPost,
    } = this.props
    const { isOpen, isOpenAddBox, bodyPost } = this.state

    const getUrl = (str: string): string => {
      const { paginationUrls } = photos

      if (!paginationUrls.length) return ''

      const filtered: string = paginationUrls.filter(item => item.match(str))[0]
      const result: any = filtered && filtered.match(/<(.*)>/)

      return result ? result[1] : ''
    }

    console.log('==========RENDER==========================')
    console.log(bodyPost)
    console.log('====================================')
    return (
      <div className="admin-panel">
        <PulseLoader
          className="admin-panel__loader"
          sizeUnit="px"
          color="#36D7B7"
          loading={loading}
        />

        <div className="admin-panel__wrapper">
          <SendPostForm
            removeItem={this.removeItem}
            onChangeTextInBodyPost={this.onChangeTextInBodyPost}
            bodyPost={bodyPost}
            onSend={setPost}
            onOpenUnsplash={this.handleOpen}
            getPhoto={getPhoto}
            currentPhoto={photos.currentPhoto}
          />

          {isOpen && (
            <Fade in={isOpen}>
              <div className="admin-panel__modal">
                <Fab
                  style={{ position: 'absolute', right: '-50px' }}
                  size="small"
                  color="secondary"
                  onClick={this.handleClose}
                  variant="round"
                >
                  <Icons.CloseOutlined />
                </Fab>

                <PhotoGrid
                  prevUrl={getUrl('prev')}
                  nextUrl={getUrl('next')}
                  getPhotoNext={getPhotoNext}
                  getPhotoPrev={getPhotoPrev}
                  setCurrentPhoto={setCurrentPhoto}
                  data={photos.data}
                  loading={photos.loading}
                  onClose={this.handleClose}
                />
              </div>
            </Fade>
          )}
          <div className="admin-editor__add-box-wrap">
            <Fab
              size="small"
              color="secondary"
              onClick={this.handleTogleAddBox}
            >
              <Icons.AddOutlined />
            </Fab>

            {isOpenAddBox && (
              <div className="admin-editor__add-box">
                <button type="button" onClick={() => this.addTextInBodyPost()}>
                  <Icons.NoteAddOutlined color="primary" />
                </button>

                <button
                  type="button"
                  onClick={() => this.addPhotoInBodyPost(mockImg)}
                >
                  <Icons.ImageSearchOutlined color="primary" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
