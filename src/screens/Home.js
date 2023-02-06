import { View, StyleSheet, Image, StatusBar,Text,ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/img/sot.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { darkGreen } from '../component/combocomponent/Constants';
import FbBtn from '../component/combocomponent/FbBtn';
import GoogleBtn from '../component/combocomponent/GoogleBtn';
import HomeContiBtn from '../component/combocomponent/HomeContiBtn';
import TextField from '../component/combocomponent/TextField';
export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar hidden={false} />
        
        <View style={styles.imageContainer}>
          <Image source={Logo} />
        </View>
        
       <View style={styles.buttonContainer}>
          <View style={{marginBottom:hp(3),marginLeft:hp(1)}}>
          <FbBtn textColor='white' bgColor={darkGreen} btnLabel="Continue with Google" Press={() => alert("Logged In")} />

          </View>
          <View style={{marginLeft:hp(1)}}>
          <GoogleBtn textColor='white' bgColor={darkGreen} btnLabel="Continue with Facebook" Press={() => alert("Logged In")} />

          </View>
          <View style={styles.linecontainer}><Text>-----------OR-----------</Text></View>
          <View style={{marginLeft:hp(0.1)}}>
            <Text style={{fontSize:hp(2)}}>Enter Email</Text>
          <TextField
            placeholder="Email"
            keyboardType={'email-address'}
          />
          </View>
       </View>
        <View style={styles.slidebtn}>
          
          <HomeContiBtn btnLabel="Continue"/>
         
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    position:'absolute',
    left:0,
    right:0,
    top:0,
    
  },

  imageContainer:{
    
    flex:wp(0.1),
    marginTop:hp(7)
  },
 
  buttonContainer:{
    marginTop:hp(15),
    marginLeft:hp(1),
  marginVertical:hp(3)
  },
  linecontainer: {
    marginVertical:hp(3),
    
    width:wp(90),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  slidebtn:{
    
  }
  
 

});
