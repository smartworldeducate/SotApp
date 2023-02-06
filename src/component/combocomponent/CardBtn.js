import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons';

import { useNavigation } from '@react-navigation/native'

export default function CardBtn({bgColor, btnLabel, textColor, Press}) {
    const navigation = useNavigation();
  return (
   
    <TouchableOpacity
    
    onPress={()=>navigation.navigate()}
      style={{
        backgroundColor: "#fff",
        borderRadius: 50,
        alignItems: 'center',
        width: hp(10),
        paddingVertical:hp(0.5),
        marginTop:hp(1),
         borderColor: '#5669FF',
         borderWidth:1,
         marginBottom:hp(1)
        
      }}>
       <View style={{flexDirection:'column',alignItems:'center'}}>
      
      
      <Text style={{color: "#5669FF", fontSize:15,fontWeight:'600', }}>
        Theam
      </Text>
     
      
        {/* <Text style={{fontSize:12,color:"#fff"}}>7th Novenmber 2022</Text> */}
      

      </View>
    </TouchableOpacity>
  );
}