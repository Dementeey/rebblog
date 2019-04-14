/**
 * AdminPanelEditor - component
 */

import React, { useState } from 'react';
import Editor from '../../components/EditorS';
// import { PulseLoader } from 'react-spinners';

import './index.css';

export default () => {
  const handlerEditor = data => {
    console.log('===data=================================');
    console.log(data.toJSON());
    console.log('====================================');
  };

  return (
    <div>
      <Editor callback={handlerEditor} placeholder="Type your story..." />

      <button>send</button>
    </div>
  );
};
