// import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// screens import
import SplashScreen from '../../screens/SplashScreen';
import Home from '../../screens/Home';
import SignInScreen from '../../component/combocomponent/SignInScreen';
import SessionProgramm from '../../screens/SessionProgramm';
import AllEvents from '../../screens/AllEvents';
import PrevEvents from '../../screens/PrevEvents';
import Exibitor from '../../screens/Exibitor';
import SpeakerList from '../../screens/SpeakerList';
import Profile from '../../screens/Profile';
import Profile1 from '../../screens/Profile1';
import Sponser from '../../screens/Sponser';
import RegisterScreen from '../../screens/RegisterScreen';
import SessionDetail from '../../screens/SessionDetail';
import DrawerNavigator from '../../Drawer/DrawerNavigator';
import ImagePicker from '../../component/ImagePicker';
const Stack = createNativeStackNavigator();


export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
     

        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name="PrvEvents"
          component={PrevEvents}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ImagePicker"
          component={ImagePicker}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SessionDetail"
          component={SessionDetail}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Profile1"
          component={Profile1}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Exibitor"
          component={Exibitor}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="AllEvents"
          component={AllEvents}
          options={{headerShown: false}}
        />

          <Stack.Screen
          name="SpeakerList"
          component={SpeakerList}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Sponser"
          component={Sponser}
          options={{headerShown: false}}
        />
       <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />

       
         <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SessionProgramm"
          component={SessionProgramm}
          options={{headerShown: false}}
        />

        
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
