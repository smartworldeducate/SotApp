import React from 'react';
import {TextInput,Text} from 'react-native';
import {darkGreen} from './Constants';

const TextField = props => {
  return (
  <>
  
    <TextInput
      {...props}
      style={{ borderRadius: 100, color: 'gray', paddingHorizontal: 10,paddingVertical:20, width: 360, marginVertical: 10,borderColor:"blue",borderWidth:1}}
      placeholderTextColor="black"></TextInput>
  </>
  );
};

export default TextField;