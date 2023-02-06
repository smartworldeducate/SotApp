import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons';

import { useNavigation } from '@react-navigation/native'

export default function HomeContiBtn({bgColor, btnLabel, textColor, Press}) {
    const navigation = useNavigation();
  return (
   
    <TouchableOpacity
    
    onPress={()=>navigation.navigate('SessionDetail')}
      style={{
        backgroundColor: "#D0D0D0",
        borderRadius: 15,
        alignItems: 'center',
        width: 350,
        paddingVertical: 20,
        
      }}>
       <View style={{flexDirection:"row"}}>
      
      <View>
      <Text style={{color: textColor, fontSize: 20, }}>
        {btnLabel}
      </Text>
      </View>
      <View style={{marginLeft:hp(20)}}>
        <Icon name='arrow-right' size={35} color="gray"/>
      </View>

      </View>
    </TouchableOpacity>
  );
}