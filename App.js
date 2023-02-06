import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import StackNavigator from './src/navigation/StackNavigator/StackNavigator';


const App = () => {
  return(
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor='#fff' />
    <StackNavigator/>
    </>
  )
};

export default App;