import React from 'react';
import {Image,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,KeyboardAvoidingView,View,} from 'react-native';
import { WebBrowser } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button,Input,Container, Header, Content, Form, Item, Picker, Left, Body, Right, Label ,Title,large,ListItem, CheckBox} from 'native-base';
import { green } from 'ansi-colors';
import { LinearGradient,Font } from 'expo';

export class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: undefined,
          fontLoaded: false,
        };
      }
      async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        });
        this.setState({ fontLoaded: true });
      }
      onValueChange(value: string) {
        this.setState({
          selected: value
        });
      }
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


              <Container>

        <Header style={{ paddingTop:10}}>
          <Left/>
          <Body>
          {
          this.state.fontLoaded ? (
            <Title  > Help </Title>
          ) : null
        }

          </Body>
          <Right />
        </Header>
        <Content style={{ marginTop:25}}>
          <Form>
            <Picker
              mode="dropdown"
              placeholder="Select One"
              placeholderStyle={{ color: "#2874F0" }}
              note={false}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Andheri" value="key0" />
              <Picker.Item label="Bandra" value="key1" />
              <Picker.Item label="Malad" value="key2" />

            </Picker>
            <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text style={{ paddingLeft:15}}>Items Needed</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text style={{ paddingLeft:15}}>Items Needed</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox  color="green"/>
            <Body>
              <Text style={{ paddingLeft:15}}>Others</Text>
            </Body>
          </ListItem>
            <Item floatingLabel>
              <Label>Further Details</Label>
              <Input />
            </Item>
            <View style={[{ width: "100%", marginLeft:30 }]}>
                <Button rounded style={{marginLeft:25 , marginTop:25,justifyContent:'center', color:'#f0f0f0'}}>
                    <Text>                               Submit                           </Text>
                </Button>
                </View>

          </Form>
        </Content>

      </Container>


        
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