import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import CustomDrawer from './CustomDrawer';
import Home from '../screens/Home';
import SessionProgramm from '../screens/SessionProgramm';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={SessionProgramm}
        options={{headerShown: false}}
      />
     
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
