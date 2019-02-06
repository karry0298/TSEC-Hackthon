import React from 'react';
import {Image,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,KeyboardAvoidingView,View,} from 'react-native';
import { WebBrowser } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Item, Input} from 'native-base';
import { green } from 'ansi-colors';
import { LinearGradient } from 'expo';

export class Login extends React.Component {
    
        static navigationOptions = {
          header: null
        }

        state = {usrName:"" , pWord:""}

        onLogFun(){
          const {usrName , pWord} = this.state
          console.warn(usrName , pWord)
          if(usrName != '' && pWord != ''){
              console.warn('working okkkkks')
              //ToastAndroid.show('A pikachu has entered', ToastAndroid.SHORT);
              this.props.navigation.navigate('profile')
          }
          else
          {
              ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT)
              //this.props.navigation.navigate('profile')
          }
        }
  
  
  render() {
        
      return (

      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>        
        <LinearGradient colors={['#36d1dc', '#5b86e5']} style={{flex:1 , backgroundColor:'#36d1dc'}}>

                <Text style={styles.top}>
                    Sign In
                </Text>

                <Item rounded style={{marginLeft:25, marginRight:25 , marginTop:25}}>
                    <Input placeholder='Username' onChangeText={text => this.setState({usrName:text})} placeholderTextColor="#ffffff" style={{paddingLeft:25 , color:'#ffffff'}} />
                </Item>

                <Item rounded style={{marginLeft:25, marginRight:25 , marginTop:25}}>
                    <Input secureTextEntry={true} placeholder='Password' onChangeText={text => this.setState({pWord:text})} placeholderTextColor="#ffffff" style={{paddingLeft:25 , color:'#ffffff'}} />
                </Item>

                <Text style={{marginLeft:30 , marginTop:10 , color:"#ffffff"}}>
                    Forgot Password?
                </Text>

                <Button rounded onPress = { () => this.onLogFun()} style={{marginLeft:80 , marginTop:25, backgroundColor:'#ffffff'}}>
                    <Text>                               Login                               </Text>
                </Button>

                <View style={{flex:1,justifyContent: 'flex-end'}}>
                    <View style={{bottom:0}}>
                        <Text style={[{color: '#ffffff'},styles.bottom]}>
                            Don't Have an Account ? Create Account
                        </Text>
                    </View>
                </View>

        </LinearGradient>    
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