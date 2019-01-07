/**
 * @flow
 * SendPostForm - index
 */

import React, { Component } from 'react';
import Formsy from 'formsy-react';
import Button from '@material-ui/core/Button';
import * as Icons from '@material-ui/icons';
import MyInput from '../../components/InputComponents/Input';
import MyTextarea from '../../components/InputComponents/Textarea';

import messages from '../../helpers/validationErrorMessages';
import {
  type Props,
  type State,
  type ModelType,
  type SendModelType,
} from './model';

export default class LoginForm extends Component<Props, State> {
  submit = (model: ModelType): void => {
    const { onSend } = this.props;
    const sendModel: SendModelType = {
      ...model,
    };

    sendModel.tags = model.tags.split(', ');

    console.log('====================================');
    console.log(sendModel);
    console.log('====================================');

    onSend(sendModel);
  };

  searchUnsplash = ({ currentTarget }: any) => {
    if (currentTarget.value === '' || currentTarget.value === ' ') return;

    const { onOpenUnsplash, getPhoto } = this.props;

    getPhoto(currentTarget.value);

    return currentTarget.value && onOpenUnsplash();
  };

  render() {
    console.log('==========currentPhoto==========================');
    console.log(this.props.currentPhoto);
    console.log('====================================');

    const { currentPhoto } = this.props;
    return (
      <Formsy onValidSubmit={this.submit} className="admin-panel__form">
        <MyInput
          title={<Icons.TitleOutlined color="primary" />}
          name="title"
          placeholder="Заголовок"
          validations="minLength:3"
          validationError={messages.minText}
          required
          labelClassName="admin-panel__label"
        />

        {!currentPhoto.id ? (
          <MyInput
            title={<Icons.ImageSearchOutlined color="primary" />}
            name="unsplash"
            placeholder="Загрузить фото с unsplash.com Пример: italy, moto, apple"
            validations="minLength:3"
            validationError={messages.minText}
            labelClassName="admin-panel__label"
            callBack={this.searchUnsplash}
            autocomplete="off"
          />
        ) : (
          <div className="admin-panel__label">
            <Icons.ImageOutlined color="primary" />
            <div
              style={{ width: '100%', maxHeight: '400px', overflow: 'auto' }}
            >
              <img
                style={{ width: '100%' }}
                src={currentPhoto.urls.small}
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
          validations={{
            minLength: 3,
            maxLength: 150,
          }}
          validationErrors={{
            minLength: messages.minText,
            maxLength: messages.maxDescr,
          }}
          required
          labelClassName="admin-panel__label admin-panel__label-descr"
        />

        <MyTextarea
          title={
            <Icons.NoteAddOutlined
              color="primary"
              style={{ marginTop: '12px' }}
            />
          }
          placeholder="Текст поста"
          name="text"
          validations="minLength:3"
          validationError={messages.minText}
          required
          labelClassName="admin-panel__label admin-panel__label-area"
        />

        <MyInput
          title={<Icons.LabelOutlined color="primary" />}
          name="tags"
          placeholder={`Теги. Писать по одному через "," Пример: цветы, розы, тюльпаны`}
          validations="minLength:3"
          validationError={messages.minText}
          required
          labelClassName="admin-panel__label"
        />

        <div className="admin-panel__box-btn">
          <Button
            style={{ margin: '10px 0 20px 0', display: 'inline-flex' }}
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
          >
            Отправить
            <Icons.Send style={{ marginLeft: '5px', fontSize: '17px' }} />
          </Button>

          <Button
            style={{ margin: '10px 0 20px 0', display: 'inline-flex' }}
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
