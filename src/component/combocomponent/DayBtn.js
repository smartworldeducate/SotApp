import {View, Text, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function DayBtn({bgColor, btnLabel, textColor, Press}) {
  const [active,setActive]=useState(false)
  
    // const navigation = useNavigation();
  return (
   
    <TouchableOpacity
    
    onPress={()=>navigation.navigate()}
      style={{
        backgroundColor: "#fff",
        borderRadius: 50,
        alignItems: 'center',
        width: hp(15),
        paddingVertical:hp(1),
        margin:hp(0.5),
        borderColor: '#5669FF',
        borderWidth:1
        
      }}>
       <View style={{flexDirection:'column',alignItems:'center'}}>
      
      
      <Text style={{color: "#5669FF", fontSize:12,fontWeight:'600' }}>
        {btnLabel}
      </Text>
     
      
        <Text style={{fontSize:10,color:"#5669FF"}}>7th Novenmber 2022</Text>
      

      </View>
    </TouchableOpacity>
  );
}