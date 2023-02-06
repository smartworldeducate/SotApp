import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons';

import { useNavigation } from '@react-navigation/native'

export default function InterestedBtn({bgColor, btnLabel, textColor, Press}) {
    const navigation = useNavigation();
  return (
   
    <TouchableOpacity
    
    onPress={()=>navigation.navigate("Profile")}
      style={{
        backgroundColor: "#5669FF",
        borderRadius: 5,
        alignItems: 'center',
        width: hp(10),
        paddingVertical:hp(1),
       
         
        
      }}>
       <View style={{flexDirection:'column',alignItems:'center'}}>
      
      
      <Text style={{color: "#fff", fontSize:15,fontWeight:'600', }}>
        Register
      </Text>
     
      
        {/* <Text style={{fontSize:12,color:"#fff"}}>7th Novenmber 2022</Text> */}
      

      </View>
    </TouchableOpacity>
  );
}