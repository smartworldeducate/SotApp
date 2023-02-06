import { View, StyleSheet, Image, StatusBar,Text,ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/img/sot.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SpBtn from './SpBtn';
import TextField from './TextField';
export default function SignUpScreen() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <View style={styles.imageContainer}>
          <Image source={Logo} />
        </View>
        
       <View style={styles.buttonContainer}>
          <View style={{marginBottom:20}}>
             <Text style={{marginLeft:hp(1), fontSize:hp(3)}}>Sign Up as</Text>
          </View>
          <View style={{marginBottom:20,}}>
             <Text style={{marginLeft:hp(1),fontSize:hp(3), color:"black"}}>salmanali@bh.edu.pk</Text>
          </View>
          
         
       </View>
       <View>
       <Text style={{fontSize:hp(2),marginLeft:hp(2)}}>Create Password</Text>
          <TextField
            placeholder="Create Password"
            keyboardType={'email-address'}
          />
          </View>
        <View style={styles.slidebtn}>
          
          <SpBtn btnLabel="Continue"/>
         
        </View>

        <View style={{marginTop:hp(5)}}>
            <Text style={{fontSize:hp(2.5),color:"black"}}>
            Note: this screen for new user
            </Text>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F9F9',
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
    marginTop:hp(12)
  },
 
  buttonContainer:{
    width:wp(90),
    marginTop:hp(15),
    marginLeft:hp(5),
  marginVertical:hp(3)
  },
  linecontainer: {
    marginVertical:hp(3),
    
    width:wp(90),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  slidebtn:{
    marginTop:hp(2)
  }
  
 

});
