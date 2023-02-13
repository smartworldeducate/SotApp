import {View, Text, StatusBar} from 'react-native';
import React, { useEffect,useState } from 'react';
import Routes from './Routes';
import { notificationService, requestUserPermission } from './src/utils/PushNotification';


const App = () => {
  useEffect(() => {
    requestUserPermission()
    notificationService()
  }, [])
  return(
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor='#fff' />
    <Routes/>
    </>
  )
};

export default App;