import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons';

import { useNavigation } from '@react-navigation/native'

export default function ExibitorBtn({bgColor, btnLabel, textColor, Press}) {
    const navigation = useNavigation();
  return (
   
    <TouchableOpacity
    
    
      style={{
        backgroundColor: "#FFD700",
        borderRadius: 50,
        alignItems: 'center',
        width: hp(10),
        paddingVertical:hp(0.5),
        marginTop:hp(1),
         borderColor: '#5669FF',
        
         marginBottom:hp(1)
        
      }}>
       <View style={{flexDirection:'column',alignItems:'center'}}>
      
      
      <Text style={{color: "#fff", fontSize:15,fontWeight:'600', }}>
        Gold
      </Text>
     
      
      

      </View>
    </TouchableOpacity>
  );
}