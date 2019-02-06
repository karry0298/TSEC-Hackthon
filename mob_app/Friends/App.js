import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer,  createDrawerNavigator, createSwitchNavigator ,createTabNavigator } from "react-navigation";
import { Login } from './containers/login/login';
import { Came } from './containers/camera/camera';
import { Message } from './containers/message/message';
import { Media } from './containers/media/media';
import { Admin } from './containers/admin/admin';
import SideBar from './containers/SideBar';
import { Ionicons } from '@expo/vector-icons';

const Mdn = createDrawerNavigator({
  camera: {screen:Came},
  media:{screen:Media},
  admin:{screen:Admin}
  messg:{screen:Message,}
},
{
  contentComponent: SideBar,
  contentOptions:{
    activeTintColor:"red",
  }
})

const AppNavigator = createStackNavigator({
  login: Login,
  profile: Mdn
},
{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft:(
          <Ionicons name="md-checkmark-circle" size={32} color="black" onPress={() => navigation.toggleDrawer()} />
      )
    };
  }
});

export default createAppContainer(AppNavigator);

