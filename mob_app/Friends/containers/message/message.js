import React from 'react';
import {Image,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,KeyboardAvoidingView,View,} from 'react-native';
import { WebBrowser } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button,Input,Container, Header, Content, Form, Item, Picker, Fab, Body, Right, Label ,Title,large,ListItem, CheckBox} from 'native-base';
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
      handleClick = () => {
        console.warn(this.state.further_details+" "+this.state.selected)
        fetch('http://10.42.0.12:3000/message', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              area:this.state.selected,
              item:this.state.items_needed,
              people:this.state.people_needed,
              others:this.state.others,
              message:this.state.further_details  
            }),
          }).catch(error => {
            console.warn(error);
          });
    }

        static navigationOptions = {
          header: null
        }

        state = {usrName:"" , pWord:""} 
  
  render() {
        
      return (


      <Container>
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
              <Label >Further Details</Label>
              <Input style={{paddingTop:50}} onChangeText={(text)=> {this.setState({further_details:text});}}/>
            </Item>
            <View style={[{ width: "100%", marginLeft:30 }]}>
                <Button  onPress={this.handleClick}   rounded style={{marginLeft:50 , marginTop:45,justifyContent:'center', backgroundColor:'#f0f0f0'}}>
                    <Text>                               Submit                           </Text>
                </Button>
                </View>

          </Form>
        </Content>


        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('reply')}>
            <Icon name="share" />
          </Fab>

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