import React from 'react';
import {AsyncStorage, Image, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FileSystem, FaceDetector, MediaLibrary, Permissions } from 'expo';
import {Button, Item, Input} from 'native-base';
import { bold } from 'ansi-colors';

export class Children extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rollNo: '',
      engMarks: '',
      mathMarks:'',
      sciMarks:''
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
    console.warn(this.state.rollNo+"    "+this.state.engMarks+" "+this.state.mathMarks+"    "+this.state.sciMarks)

    fetch('http://10.42.0.12:3000/academic', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rollNo:this.state.rollNo,
          English:this.state.engMarks,
          Maths:this.state.mathMarks,
          Science:this.state.sciMarks
        }),
      }).catch(error => {
        console.warn(error);
        console.warn("it enetrd")
      });
}
  
  
  render() {
    return (
      <View style={{ alignSelf:"center",paddingTop:5}}>

          <Image
              style={[{
                height: 210,
                width: 350,
                borderRadius: 10,
              }]}
              source={require('../../assets/bgg.jpg')}
          />


          <Item style={{marginBottom:10,marginTop:10}} rounded>
            <Input onChangeText={(text)=> {this.setState({rollNo:text});}} style={{paddingLeft:15}} placeholder='Enter The Roll Number'/>
          </Item>

          <Item style={{marginBottom:10}} rounded>
            <Input onChangeText={(text)=> {this.setState({engMarks:text});}} style={{marginLeft:5}} placeholder='Enter markes : English'/>
          </Item>

          <Item style={{marginBottom:10}} rounded>
            <Input onChangeText={(text)=> {this.setState({mathMarks:text});}} style={{marginLeft:5}} placeholder='Enter markes : Maths'/>
          </Item>

          <Item style={{marginBottom:10}} rounded>
            <Input onChangeText={(text)=> {this.setState({sciMarks:text});}} style={{marginLeft:5}} placeholder='Enter markes : Science'/>
          </Item>
          <Button rounded onPress = {this.handleClick} style={{marginLeft:65 , marginTop:25,justifyContent:'center', backgroundColor:'#ffffff'}}>
              <Text>                        Submit                        </Text>
          </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  pictures: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  button: {
    padding: 20,
  },
  whiteText: {
    color: 'white',
  }
});