import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';
import { green } from 'ansi-colors';
export class Login extends React.Component {
    render() {
        
      return (

        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        
        <View
          style={{position: 'absolute',top: 0,left: 0,width: '100%',
            height: '100%',
          }}
        >
        <Image source={require('./../../assets/bg1.jpg')} style={{width: '100%', height: '100%',opacity:0.8}}>
        </Image>
        </View>
 
       <Input
          placeholder='Email'
          placeholderTextColor = "black"
          selectionColor="black"
          leftIcon={{ type: 'antdesign', name: 'user',margin:10,color:'white',}}
          inputContainerStyle={{ borderRadius:10, marginBottom:12,marginHorizontal:15,borderBottomWidth: 0 ,backgroundColor:"green",opacity:0.3}}
         
        />
        <Input
          placeholder='Password'
          placeholderTextColor = "black"
          style={{ padding:100,}} 
          selectionColor="black"
          
          leftIcon={{ type: 'antdesign', name: 'lock',margin:10,color:'white',}}
          inputContainerStyle={{ borderRadius:10,marginBottom:12,marginHorizontal:15,backgroundColor:"green",opacity:0.3,borderBottomWidth: 0 }}
          
        />

       <View style={[{ width: "60%", margin: 10,  }]}>
       <Button
        title="Login"
        color="green"
       
        containerStyle={{paddingHorizontal:25,}}
        //containerStyle={{color:'green',}}

        />
      </View>






        </KeyboardAvoidingView>
        
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonStyle: {
      backgroundColor: "#aaa"
      },
  });