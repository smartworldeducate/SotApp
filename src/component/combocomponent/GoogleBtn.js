import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'

export default function FbBtn({bgColor, btnLabel, textColor, Press}) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('PrvEvents')}
      style={{
        backgroundColor: "#1977F3",
        borderRadius: 15,
        alignItems: 'center',
        width: 350,
        paddingVertical: 20,
        
      }}>
      
      <View style={{flexDirection:"row"}}>
      <View style={{marginLeft:20,marginRight:20}}>
        <Icon name='facebook-f' size={35} color="#fff"/>
      </View>
      <View>
      <Text style={{color: textColor, fontSize: 20, }}>
        {btnLabel}
      </Text>
      </View>
     

      </View>
    </TouchableOpacity>
  );
}