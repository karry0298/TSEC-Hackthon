import React from 'react';
import {AsyncStorage, Image, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FileSystem, FaceDetector, MediaLibrary, Permissions } from 'expo';
import {Button, Item, Input} from 'native-base';
import { bold } from 'ansi-colors';

export class Children extends React.Component {
  
  
  render() {
    return (
      <View style={{ alignSelf:"center",paddingTop:5}}>
          <Text style={{fontSize:32,paddingBottom:10}}>           Data entry           </Text> 
          
          <Item style={{marginBottom:10}} rounded>
            <Input style={{paddingLeft:1  0}} placeholder='Enter The Roll Number'/>
          </Item>

          <Item style={{marginBottom:10}} rounded>
            <Input placeholder='Enter markes : English'/>
          </Item>

          <Item style={{marginBottom:10}} rounded>
            <Input placeholder='Enter markes : Maths'/>
          </Item>

          <Item style={{marginBottom:10}} rounded>
            <Input placeholder='Enter markes : Science'/>
          </Item>

          <Button rounded onPress = { () => this.props.navigation.navigate('messg')} style={{marginLeft:55 , marginTop:25,justifyContent:'center', backgroundColor:'#ffffff'}}>
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