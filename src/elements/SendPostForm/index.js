/**
 * @flow
 * SendPostForm - index
 */

import React, { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Formsy from 'formsy-react';
import Button from '@material-ui/core/Button';
import * as Icons from '@material-ui/icons';
import parserBodyPost from '../../helpers/parserBodyPost';
import MyInput from '../../components/InputComponents/Input';
import MyTextarea from '../../components/InputComponents/Textarea';

import messages from '../../helpers/validationErrorMessages';
import {
  type Props,
  type State,
  type ModelType,
  type SendModelType,
} from './model';

export default class SendPostForm extends Component<Props, State> {
  submit = (model: ModelType): void => {
    const { onSend, bodyPost } = this.props;
    const sendModel: SendModelType = {
      ...model,
      bodyPost,
    };

    sendModel.tags = model.tags && model.tags.split(', ');
    onSend(sendModel);
  };

  searchUnsplash = ({ currentTarget }: any) => {
    if (currentTarget.value === '' || currentTarget.value === ' ') return;
    const { onOpenUnsplash } = this.props;

    return currentTarget.value && onOpenUnsplash();
  };

  handleKeyPress = (e: any) => {
    if (e.ctrlKey && e.key === 'Enter') {
      const { onOpenUnsplash, getPhoto } = this.props;
      getPhoto(e.currentTarget.value, '1', 'landscape');

      return e.currentTarget.value && onOpenUnsplash();
    }
  };

  render() {
    const {
      currentPhoto,
      bodyPost,
      removeItem,
      onChangeTextInBodyPost,
    } = this.props;

    return (
      <Formsy onValidSubmit={this.submit} className="admin-editor__form">
        <fieldset className="admin-editor__fieldset">
          <legend>Основные поля</legend>
          <MyInput
            title={<Icons.TitleOutlined color="primary" />}
            name="title"
            placeholder="Заголовок"
            labelClassName="admin-editor__label"
          />

          <MyInput
            title={<Icons.LabelOutlined color="primary" />}
            name="tags"
            placeholder={`Теги. Писать по одному через "," Пример: цветы, розы, тюльпаны`}
            labelClassName="admin-editor__label"
          />

          {!currentPhoto.id ? (
            <MyInput
              title={<Icons.ImageSearchOutlined color="primary" />}
              name="unsplash"
              placeholder="Загрузить фото с unsplash.com Пример: italy, moto, apple, и нажмите 'ctrl + Enter'"
              validations="minLength:3"
              validationError={messages.minText}
              labelClassName="admin-editor__label"
              callBack={this.searchUnsplash}
              onKeyPress={this.handleKeyPress}
              autocomplete="off"
            />
          ) : (
            <div className="admin-editor__label">
              <Icons.ImageOutlined color="primary" />
              <div
              // style={{
              //   width: '100%',
              //   maxHeight: '400px',
              //   overflow: 'auto',
              //   marginTop: '10px',
              // }}
              >
                <img
                  style={{ width: '100%' }}
                  src={currentPhoto.urls.regular}
                  alt={currentPhoto.description || currentPhoto.user.username}
                />
              </div>
            </div>
          )}

          <MyTextarea
            title={
              <Icons.DescriptionOutlined
                color="primary"
                style={{ marginTop: '-15px' }}
              />
            }
            name="description"
            placeholder="Описание"
            validations="maxLength:150"
            validationErrors={messages.maxDescr}
            labelClassName="admin-editor__label admin-editor__label-descr"
          />
        </fieldset>

        {!!bodyPost.length && (
          <fieldset>
            <legend>Остальные поля</legend>
            {parserBodyPost(bodyPost, removeItem, onChangeTextInBodyPost)}
          </fieldset>
        )}

        <div className="admin-editor__box-btn">
          <Button
            className="admin-editor__btn"
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
          >
            Отправить
            <Icons.Send style={{ marginLeft: '5px', fontSize: '17px' }} />
          </Button>

          <Button
            className="admin-editor__btn"
            variant="contained"
            color="primary"
            size="medium"
            disabled
          >
            Пердпросмотр
            <Icons.VisibilityOutlined
              style={{ marginLeft: '5px', fontSize: '17px' }}
            />
          </Button>
        </div>
      </Formsy>
    );
  }
}
