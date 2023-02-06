import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, StackActions} from '@react-navigation/native';

//
import Logo from '../../assets/img/sot.png';

export default function SplashScreen() {
  //
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      navigation.dispatch(StackActions.replace('DrawerNavigator'));
    }, 4000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.logoContainer}>
        <Image source={Logo}  />
      </View>

    </View>
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
