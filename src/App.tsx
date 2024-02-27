import React from 'react';

import './App.css';

import { SuperButton } from './components/SuperButton/SuperButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SuperButton
          theme={'light'}
          typeBackGround={'primary'}
          isDisabled={false}
          children={'Hello'} />
        <SuperButton
          theme={'light'}
          typeBackGround={'secondary'}
          isDisabled={false}
          children={'Hello'} />
        <SuperButton
          theme={'dark'}
          typeBackGround={'primary'}
          isDisabled={true}
          children={'Hello'} />
        <SuperButton
          theme={'dark'}
          typeBackGround={'secondary'}
          isDisabled={false}
          children={'Hello'} />

      </header>
    </div>
  );
}

export default App;
