import React from 'react';
import {Image,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,KeyboardAvoidingView,View,} from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
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
              //ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT)
              console.warn('working okkkkks')
              //this.props.navigation.navigate('profile')
          }
        }
  
  
  render() {
        
      return (

        <LinearGradient colors={['#36d1dc', '#5b86e5']} style={{flex:1 , backgroundColor:'#36d1dc'}}>


        <View >
        <Text style={styles.top}>
                   Sign In
               </Text>

                <Item rounded style={{marginLeft:25, marginRight:25 , marginTop:25}}>
                <Ionicons name="md-person" style={{paddingLeft:18}} size={32} color="white" />
                    <Input placeholder='Username' onChangeText={text => this.setState({usrName:text})} placeholderTextColor="#ffffff" style={{paddingLeft:25 , color:'#ffffff'}} />
                </Item>
                
                

                <Item rounded style={{ marginLeft:25, marginRight:25  , marginTop:25}}>
                   <Ionicons name="md-lock" style={{paddingLeft:18}} size={32} color="white" />
                    <Input secureTextEntry={true} placeholder='Password' onChangeText={text => this.setState({pWord:text})} placeholderTextColor="#ffffff" style={{paddingLeft:25 , color:'#ffffff'}} />
                </Item>

                <Text style={{marginLeft:30 , marginTop:10 , color:"#ffffff"}}>
                    Forgot Password?
                </Text>
                <View style={[{ width: "100%", marginLeft:30 }]}>
                <Button rounded onPress = { () => this.onLogFun()} style={{marginLeft:55 , marginTop:25,justifyContent:'center', backgroundColor:'#ffffff'}}>
                    <Text>                               Login                               </Text>
                </Button>
                </View>




                <View style={{flex:1,marginTop:190, justifyContent: 'flex-start'}}>
                    <View style={{bottom:0}}>
                        <Text style={[{color: '#ffffff'},styles.bottom]}>
                            Don't Have an Account ? Create Account
                        </Text>
                    </View>
                </View>
        </View>

        </LinearGradient>    
        
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
 
      }, 
      bottom: {
        textAlign: 'center',
        fontSize:14
        },
      top: {
        textAlign:"center", 
        color: '#ffffff' , 
        fontSize:45,
        marginTop:115,
      }
    })