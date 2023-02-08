import { View, StyleSheet, Image, StatusBar,Text,ScrollView , TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/img/sot.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { darkGreen } from '../component/combocomponent/Constants';
import Icon from 'react-native-vector-icons/AntDesign';
import Fb from 'react-native-vector-icons/FontAwesome5';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth, { firebase } from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'
import HomeContiBtn from '../component/combocomponent/HomeContiBtn';
import TextField from '../component/combocomponent/TextField';
import { useNavigation ,StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Home() {
  const storeData = async (value) => {
    // console.log(value)
    try {
      await AsyncStorage.setItem('user', value)
    } catch (e) {
      // console.log(e)
    }
  }
  const fbData = async (value) => {
    // console.log(value)
    try {
      await AsyncStorage.setItem('fbdata', value)
    } catch (e) {
      // console.log(e)
    }
  }
  useEffect(()=>{
    GoogleSignin.configure({
      webClientId: '188885903236-0opsc2g3shota8p9o8m1tq6n95qu9kb7.apps.googleusercontent.com',
});
  },[])

  const signinWithGoogle=async()=>{
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // console.log(userInfo?.user?.id)
      const {id} =userInfo?.user
      storeData(id)
      navigation.navigate('SessionProgramm');
      
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  const loginWithFacebook=async()=>{
     // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
  }
  const navigation = useNavigation()
  return (
    <>
     
      <View style={styles.container}>
        <StatusBar hidden={false} />
        
        <View style={styles.imageContainer}>
          <Image source={Logo} />
        </View>
        
       <View style={styles.buttonContainer}>
          <View style={{marginBottom:hp(3),marginLeft:hp(2)}}>
          {/* <FbBtn textColor='white' bgColor={darkGreen} btnLabel="Continue with Google" Press={() => alert("Logged In")} />
          
          */}

          <TouchableOpacity
              onPress={()=>signinWithGoogle().then(res=>{
                console.log("respo:",res)
              }).catch(error=>{
                console.log(error)
              })}
                style={{
                  backgroundColor: "#E74133",
                  borderRadius: 15,
                  // alignItems: 'center',
                  width: wp(80),
                  paddingVertical:hp(2),
                  
                }}>
                
                <View style={{flexDirection:"row"}}>
                <View style={{marginLeft:50,marginRight:20}}>
                  <Icon name='google' size={35} color="#fff"/>
                </View>
                <View>
                <Text style={{color:'#fff',fontSize:20}}>
                  Continue with Google
                </Text>
                </View>
              

                </View>
              </TouchableOpacity>

          </View>
          <View style={{marginLeft:hp(2)}}>
          
         <TouchableOpacity
              onPress={()=>loginWithFacebook().then(res=>{
                console.log("facebook response:",res?.additionalUserInfo?.profile?.id)
                const {id}=res?.additionalUserInfo?.profile
                fbData(id)
              }).catch(error=>{
                console.log(error)
              })}
                style={{
                  backgroundColor: "#1977F3",
                  borderRadius: 15,
                  alignItems: 'center',
                  width: wp(80),
                  paddingVertical: hp(2),
                  
                }}>
                
                <View style={{flexDirection:"row"}}>
                <View style={{marginLeft:20,marginRight:20}}>
                  <Fb name='facebook-f' size={35} color="#fff"/>
                </View>
                <View>
                <Text style={{color:'#fff', fontSize: 20, }}>
                  Continue with Facebook
                </Text>
                </View>
              

                </View>
           </TouchableOpacity>

          </View>
          <View style={styles.linecontainer}><Text>-----------OR-----------</Text></View>
          <View style={{width:wp(80),marginLeft:hp(2)}}>
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
