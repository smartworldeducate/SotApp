import {View, Text, StatusBar} from 'react-native';
import React, { useEffect,useState } from 'react';
import Routes from './Routes';


const App = () => {
  
  return(
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor='#fff' />
    <Routes/>
    </>
  )
};

export default App;