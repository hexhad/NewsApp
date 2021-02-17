import React from 'react';
import { StatusBar } from 'react-native';


import ScreenOne from './screens/ScreenOne';

function App() {
  return (
    <>
      <StatusBar translucent backgroundColor='#F3F3F3' barStyle="dark-content" />
      <ScreenOne/>
    </>
  );
}

export default App;
