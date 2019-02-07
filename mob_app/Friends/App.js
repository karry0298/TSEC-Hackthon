import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer,  createDrawerNavigator, createSwitchNavigator ,createTabNavigator } from "react-navigation";
import { Login } from './containers/login/login';
import { Came } from './containers/camera/camera';
import { Message } from './containers/message/message';
import { Media } from './containers/media/media';
import { Admin } from './containers/admin/admin';
import { Children } from './containers/children/children';
import SideBar from './containers/SideBar';
import { Ionicons } from '@expo/vector-icons';
import { Reply } from './containers/messageReply/reply';

const Mdn = createDrawerNavigator({
  camera: {screen:Came},
  media:{screen:Media},
  admin:{screen:Admin},
  messg:{screen:Message},
  children:{screen:Children},
  reply:{screen:Reply}
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
          <Ionicons name="md-reorder" size={44} style={{paddingLeft:15}} color="black" onPress={() => navigation.toggleDrawer()} />
          )
    };
  },  
    navigationOptions: {
      title: 'Test', // this works
      header: { //any prop in the header is ignored
        tintColor: 'black',
        style: {
          backgroundColor: 'skyblue'
        }
      }
    }
});

export default createAppContainer(AppNavigator);

