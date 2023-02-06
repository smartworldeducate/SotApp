import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';

import { useNavigation } from '@react-navigation/native'

export default function CardLocation({bgColor, btnLabel, textColor, Press}) {
    const navigation = useNavigation();
  return (
   
    <TouchableOpacity
    
   
      style={{
        backgroundColor: "#fff",
        borderRadius: 50,
        alignItems: 'center',
        width: hp(8),
        paddingVertical:hp(0.4),
        
         borderColor: 'red',
        
      }}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
      <View>
      <Icon name='location-pin' size={20} color="#5669FF"/>
      </View>
      
     <View>
     <Text style={{color: "black", fontSize:12,fontWeight:'600', }}>
     Karachi
        </Text>
     </View>
     
      
        

      </View>
    </TouchableOpacity>
  );
}