/**
 * @flow
 * SendPostForm - index
 */

import React, { Component } from 'react';
import Formsy from 'formsy-react';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
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

  render() {
    return (
      <Formsy onValidSubmit={this.submit} className="admin-panel__form">
        <MyInput
          name="title"
          placeholder="Заголовок"
          validations="minLength:3"
          validationError={messages.minText}
          required
          labelClassName="admin-panel__label"
        />

        <MyTextarea
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
          placeholder="Текст поста"
          name="text"
          validations="minLength:3"
          validationError={messages.minText}
          required
          labelClassName="admin-panel__label admin-panel__label-area"
        />

        <MyInput
          name="tags"
          placeholder="Теги. Писать по одному через ',' Пример: цветы, розы, тюльпаны"
          validations="minLength:3"
          validationError={messages.minText}
          required
          labelClassName="admin-panel__label"
        />

        <Button
          style={{ margin: '10px auto 20px', display: 'flex' }}
          type="submit"
          variant="contained"
          color="primary"
          size="medium"
        >
          Отправить <SendIcon style={{ marginLeft: '5px', fontSize: '17px' }} />
        </Button>
      </Formsy>
    );
  }
}
