import React from 'react';

import { SuperButton } from './components/SuperButton/SuperButton';

import './App.css';


function App() {
  return (
    <div className="App">
      <SuperButton theme={'light'} type={'primary'} isDisabled={false} text={'Hello'} />
      <SuperButton theme={'light'} type={'secondary'} isDisabled={false} text={'Hello'} />
      <SuperButton theme={'dark'} type={'primary'} isDisabled={false} text={'Hello'} />
      <SuperButton theme={'dark'} type={'secondary'} isDisabled={false} text={'Hello'} />
    </div>
  );
}

export default App;
