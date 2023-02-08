import React from 'react';
import {TextInput,Text} from 'react-native';
import {darkGreen} from './Constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const TextField = props => {
  return (
  <>
  
    <TextInput
      {...props}
      style={{ borderRadius: 100, color: 'gray',paddingVertical:hp(2), width: wp(80), marginVertical:hp(2),borderColor:"gray",borderWidth:1}}
      placeholderTextColor="black"></TextInput>
  </>
  );
};

export default TextField;