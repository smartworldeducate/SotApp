import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons';

import { useNavigation } from '@react-navigation/native'

export default function SpBtn({bgColor, btnLabel, textColor, Press}) {
    const navigation = useNavigation();
  return (
   
    <TouchableOpacity
    
    onPress={()=>navigation.navigate('SignInScreen')}
      style={{
        backgroundColor: "#5669FF",
        borderRadius: 15,
        alignItems: 'center',
        width: 350,
        paddingVertical: 20,
        
      }}>
       <View style={{flexDirection:"row"}}>
      
      <View>
      <Text style={{color: "#fff", fontSize: 20, }}>
        {btnLabel}
      </Text>
      </View>
      <View style={{marginLeft:hp(20)}}>
        <Icon name='arrow-right' size={35} color="#fff"/>
      </View>

      </View>
    </TouchableOpacity>
  );
}