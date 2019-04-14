/**
 * AdminPanelEditor - component
 */

import React, { useState } from 'react';
import Editor from '../../components/EditorS';
// import { PulseLoader } from 'react-spinners';

import 'draft-js/dist/Draft.css';
import './index.css';

export default () => {
  const handlerEditor = data => {
    console.log('===data=================================');
    console.log(data.getCurrentContent());
    console.log(data.getText());
    console.log('====================================');
  };

  return (
    <div>
      <Editor callback={handlerEditor} placeholder="Type your story..." />

      <button>send</button>
    </div>
  );
};
