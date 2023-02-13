import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Logo from '../../assets/img/sot.png';


export default function SplashScreen() {
  
  const navigation = useNavigation();

  const [data,setData]=useState('')

  const getData=async()=>{
    const value=await AsyncStorage.getItem('user')
    console.log("splash value",value)
    setData(value)
     
  }
   
   useEffect(() => {
    getData()
    setTimeout(async () => {
    if(data){
      navigation.dispatch(StackActions.replace('SessionProgramm',{data:data}))
    }else{
      navigation.dispatch(StackActions.replace('Home'))
    }
    
      
    }, 4000);
  }, []);
  return (
    <>
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.logoContainer}>
        <Image source={Logo}  />
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
  },
  logoContainer: {
    alignItems: 'center',
  },

});
