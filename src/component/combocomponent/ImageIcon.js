import Image1 from '../../../assets/img/Image1.png';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons';

import { useNavigation } from '@react-navigation/native'

export default function ImageIcon() {
    const navigation = useNavigation();
  return (
   
    <View style={{flexDirection:"row"}}>
    <View>
    <Image style={{height:hp(5),width:hp(5)}} source={Image1}  />
    </View>
    <View style={{marginTop:hp(1)}}>
        <Text> 20 + Going</Text>
    </View>
  </View>
  );
}