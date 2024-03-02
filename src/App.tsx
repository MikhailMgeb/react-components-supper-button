import React from 'react';

import './App.css';
import { Header } from './components/ProfileScreens/Header/Header'
import { UserProfile } from './components/ProfileScreens/UserProfile/UserProfile';
import imageUser from './components/ProfileScreens/image/imageUser.jpg';
import { SettingMenu } from './components/ProfileScreens/SettingsMenu/SettingsMenu';
import { ButtonLogOut } from './components/ProfileScreens/ButtonLogOut/ButtonLogOut';

function App() {
  return (
    <div className="App">
      <Header headerText="Profile" />
      <UserProfile imageUser={imageUser} name="Jane Doe" description="This is a small bio description to let users express themselves" />
      <SettingMenu />
      <ButtonLogOut text="Logout" isDisabled={false} />
    </div>
  );
}

export default App;
