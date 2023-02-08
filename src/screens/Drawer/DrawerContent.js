import React, { useState } from 'react';
import {
  SafeAreaView,
  RefreshControl,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Left from 'react-native-vector-icons/Ionicons';
import Dot from 'react-native-vector-icons/AntDesign';
import Home from 'react-native-vector-icons/AntDesign';
import Event from 'react-native-vector-icons/MaterialIcons';
import Session from 'react-native-vector-icons/MaterialIcons';
import Hand from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/EvilIcons';
import { useNavigation,StackActions } from '@react-navigation/native';


import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerContent = ({ navigation}) => {


  // const handleNavigate = (routeName, clearStack, params) => {
  //   navigation.navigate(routeName, params);
  //   if (clearStack) {
  //     console.log('Clear');
  //   }
  // };

  const onPressLogout = async () => {
    console.log("logout call")
     await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('fbuser');
    const db = await AsyncStorage.getItem('user');
    console.log(db)
    navigation.dispatch(StackActions.replace('Home'));
    navigation.closeDrawer()
   
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:'#fff'
          
      }}>
      <View style={{ paddingLeft: wp('3') }}>
       

        <View style={{ marginVertical: hp('2') }}>
        <View style={{width:wp(50),height:hp(5),marginTop:wp(10)}}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('SessionProgramm')
            navigation.closeDrawer();
          }}>
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
                <Home name='home' size={35} color="#5669FF"/>
              </View>
              <View style={{marginLeft:hp(4)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(3),color:'#000000'}}>Home</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>

       <View style={{width:wp(50),height:hp(5),marginTop:wp(10)}}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('AllEvents')
            navigation.closeDrawer();
          }}>
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
                <Event name='event-note' size={35} color="#5669FF"/>
              </View>
              <View style={{marginLeft:hp(4)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(3),color:'#000000'}}>Events</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>

       <View style={{width:wp(50),height:hp(5),marginTop:wp(10)}}>
          <TouchableOpacity onPress={()=>navigation.navigate("SpeakerList")}>
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
                <Session name='assessment' size={35} color="#5669FF"/>
              </View>
              <View style={{marginLeft:hp(4)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(3),color:'#000000'}}>My Session</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>

       <View style={{width:wp(50),height:hp(5),marginTop:wp(10)}}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('Sponser')
            navigation.closeDrawer();
          }}>
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
                <Hand name='handshake-outline' size={35} color="#5669FF"/>
              </View>
              <View style={{marginLeft:hp(4)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(3),color:'#000000'}}>Sponsors</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>
       <View style={{width:wp(50),height:hp(5),marginTop:wp(10)}}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('ImagePicker')
            navigation.closeDrawer();
          }}>
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
                <Notification name='bell' size={35} color="#5669FF"/>
              </View>
              <View style={{marginLeft:hp(4)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(3),color:'#000000'}}>Notification</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>

       <View style={{width:wp(60),height:hp(0.5),backgroundColor:"gray",marginLeft:hp(2),marginTop:hp(3)}}></View>
       <View style={{width:wp(50),height:hp(5),marginTop:wp(10)}}>
          <TouchableOpacity onPress={()=>onPressLogout()}>
            <View style={{flexDirection:'row',marginLeft:hp(3)}}>
              <View >
                <Notification name='bell' size={35} color="#5669FF"/>
              </View>
              <View style={{marginLeft:hp(4)}}>
                <Text style={{backgroundColor:"#fff",fontSize:hp(3),color:'#000000'}}>Logout</Text>
              </View>
            </View>
          </TouchableOpacity>
       </View>
       
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default DrawerContent;
