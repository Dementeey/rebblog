/**
 * @flow
 * SendPostForm - index
 */

import React, { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';
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
  constructor(props: Props) {
    super(props);
    this.textEdit = React.createRef();
  }

  submit = (model: ModelType): void => {
    const { onSend } = this.props;
    const sendModel: SendModelType = {
      ...model,
    };

    sendModel.tags = model.tags && model.tags.split(', ');
    // sendModel.textContent = this.textEdit.current.textContent;
    // onSend(sendModel);
  };

  searchUnsplash = ({ currentTarget }: any) => {
    if (currentTarget.value === '' || currentTarget.value === ' ') return;

    const { onOpenUnsplash, getPhoto } = this.props;

    // getPhoto(currentTarget.value, '1', 'landscape');

    return currentTarget.value && onOpenUnsplash();
  };

  handleKeyPress = (e: any) => {
    if (e.ctrlKey && e.key === 'Enter') {
      const { onOpenUnsplash, getPhoto } = this.props;
      // getPhoto(e.currentTarget.value);
      getPhoto(e.currentTarget.value, '9', 'landscape');

      return e.currentTarget.value && onOpenUnsplash();
    }
  };

  removeElement = (elem: any) => {
    console.log('================elem====================');
    console.log(elem);
    console.log('===================refs=================');
    console.log(this.textEdit.current.textContent);

    console.log('====================================');

    // return unmountComponentAtNode(this.text);
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
          labelClassName="admin-panel__label"
        />

        <MyInput
          title={<Icons.LabelOutlined color="primary" />}
          name="tags"
          placeholder={`Теги. Писать по одному через "," Пример: цветы, розы, тюльпаны`}
          labelClassName="admin-panel__label"
        />

        {!currentPhoto.id ? (
          <MyInput
            title={<Icons.ImageSearchOutlined color="primary" />}
            name="unsplash"
            placeholder="Загрузить фото с unsplash.com Пример: italy, moto, apple, и нажмите 'ctrl + Enter'"
            validations="minLength:3"
            validationError={messages.minText}
            labelClassName="admin-panel__label"
            callBack={this.searchUnsplash}
            onKeyPress={this.handleKeyPress}
            autocomplete="off"
          />
        ) : (
          <div className="admin-panel__label">
            <Icons.ImageOutlined color="primary" />
            <div
              style={{
                width: '100%',
                maxHeight: '400px',
                overflow: 'auto',
                marginTop: '10px',
              }}
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
          labelClassName="admin-panel__label admin-panel__label-descr"
        />

        <MyTextarea
          title={
            <Icons.NoteAddOutlined
              color="primary"
              style={{ marginTop: '12px' }}
            />
          }
          placeholder="Расскажи свою историю"
          name="text"
          labelClassName="admin-panel__label admin-panel__label-area"
          // eslint-disable-next-line no-return-assign
        />

        <label>
          <p ref={this.textEdit} contentEditable>
            text
          </p>
        </label>

        <div className="admin-panel__box-btn">
          <Button
            className="admin-panel__btn"
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
          >
            Отправить
            <Icons.Send style={{ marginLeft: '5px', fontSize: '17px' }} />
          </Button>

          <Button
            className="admin-panel__btn"
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            onClick={this.removeElement}
          >
            <Icons.RemoveCircleOutline />
          </Button>

          <Button
            className="admin-panel__btn"
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
