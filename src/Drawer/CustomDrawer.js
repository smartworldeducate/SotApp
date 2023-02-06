import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Home from 'react-native-vector-icons/AntDesign';
import Event from 'react-native-vector-icons/MaterialIcons';
import Session from 'react-native-vector-icons/MaterialIcons';
import Hand from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/EvilIcons';


const CustomDrawer = ({navigation}) => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
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
            navigation.navigate('Exibitor')
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
        
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;