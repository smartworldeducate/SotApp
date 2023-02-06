import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons';

import { useNavigation } from '@react-navigation/native'

export default function DateView({bgColor, btnLabel, textColor, Press}) {
    const navigation = useNavigation();
  return (
   
    <TouchableOpacity
    
    
      style={{
        backgroundColor: "#fff",
        borderRadius: 5,
        alignItems: 'center',
        width: hp(10),
        paddingVertical:hp(1),
       
         
        
      }}>
       <View style={{flexDirection:'column',alignItems:'center'}}>
      
      
      <Text style={{color: "#5669FF", fontSize:15,fontWeight:'600', }}>
        20 Dec
      </Text>
     
      
      

      </View>
    </TouchableOpacity>
  );
}