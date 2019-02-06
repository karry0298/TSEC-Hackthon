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
          selected: 'Andheri',
          fontLoaded: false,
          items_needed:false,
          people_needed:false,
          others:false,
          further_details:''
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
              <Picker.Item label="Andheri" value="Andheri" />
              <Picker.Item label="Bandra" value="Bandra" />
              <Picker.Item label="Malad" value="Malad" />

            </Picker>
            <ListItem>
            <CheckBox checked={this.state.items_needed} onPress={() => this.setState({items_needed:!this.state.items_needed})}/>
            <Body>
              <Text style={{ paddingLeft:15}}>Items Needed</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={this.state.people_needed} onPress={() => this.setState({people_needed:!this.state.people_needed})} />
            <Body>
              <Text style={{ paddingLeft:15}}>People Needed</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={this.state.others} onPress={() => this.setState({others:!this.state.otehrs})} />
            <Body>
              <Text style={{ paddingLeft:15}}>Others</Text>
            </Body>
          </ListItem>
            <Item floatingLabel>
              <Label>Further Details</Label>
              <Input onChangeText={(text)=> {this.setState({further_details:text});}}/>
            </Item>
            <View style={[{ width: "100%", marginLeft:30 }]}>
                <Button rounded style={{marginLeft:25 , marginTop:25,justifyContent:'center', backgroundColor:'#f0f0f0'}}>
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