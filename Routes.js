import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import { GestureHandlerRootView } from 'react-native-gesture-handler';
  
  import * as React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import DrawerContent from './src/screens/Drawer/DrawerContent';
  
  import SplashScreen from './src/screens/SplashScreen';
  import AllEvents from './src/screens/AllEvents';
  import SessionProgramm from './src/screens/SessionProgramm';
  import PrevEvents from './src/screens/PrevEvents';
  import RegisterScreen from './src/screens/RegisterScreen';
  import SpeakerList from './src/screens/SpeakerList';
  import Sponser from './src/screens/Sponser';
  import Profile from './src/screens/Profile';
  import Exibitor from './src/screens/Exibitor';
  import ImagePicker from './src/component/ImagePicker';
  import SessionDetail from './src/screens/SessionDetail';
  import ScanerScreen from './src/screens/ScanerScreen';
  import Home from './src/screens/Home';
  import AsyncStorage from '@react-native-async-storage/async-storage';

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  

  
  function DrawerStack() {
    
    const [data,setData]=React.useState('')
    const getData=async()=>{
      const value=await AsyncStorage.getItem('user')
      console.log(value)
       setData(value)
    }
    
    React.useEffect(()=>{
      
      getData()
      
    },[])
     return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right',
          drawerStyle: { width: wp('75') },
        }}
        drawerContent={props => <DrawerContent {...props} />}>
        {data ? <Drawer.Screen name="SessionProgramm" component={SessionProgramm} /> : <Drawer.Screen name="Home" component={Home} />}
     
       
      </Drawer.Navigator>
    );
  }

  
  

  
  const Routes = () => {
   
    return (
      <NavigationContainer>
        <Stack.Navigator
          
          screenOptions={{
            headerShown: false,
          }}>
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
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SessionProgramm"
          component={DrawerStack}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScanerScreen"
          component={ScanerScreen}
          options={{headerShown: false}}
        />
        
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Routes;