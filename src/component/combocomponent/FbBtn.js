import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'



export default function GoogleBtn({bgColor, btnLabel, textColor, Press}) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('AllEvents')}
      style={{
        backgroundColor: "#E74133",
        borderRadius: 15,
        // alignItems: 'center',
        width: 350,
        paddingVertical: 20,
        
      }}>
      
      <View style={{flexDirection:"row"}}>
      <View style={{marginLeft:50,marginRight:20}}>
        <Icon name='google' size={35} color="#fff"/>
      </View>
      <View>
      <Text style={{color: textColor,fontSize:20}}>
        {btnLabel}
      </Text>
      </View>
     

      </View>
    </TouchableOpacity>
  );
}