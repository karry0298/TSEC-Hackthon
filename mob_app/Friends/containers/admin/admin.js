import React from 'react';
import {AsyncStorage, Image, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FileSystem, FaceDetector, MediaLibrary, Permissions } from 'expo';
import {Button, Item, Input} from 'native-base';

export class Admin extends React.Component {
  
  constructor() {
      super()
      this.state = {
        myText: 'My Original Text'
      }
  }

  retrieveData = async () => {
    try {
      let value = await AsyncStorage.getItem('user');
     
        // We have data!!
        console.log(value);
        //myText = value;
        console.warn("val "+value)
        //console.warn("mT "+myText)
      
    } catch (error) {
      console.warn(error)
    }
  };

  store(){
    AsyncStorage.setItem('user',"bahsjdbajsbcjksdfjkcasdfn");
  }

  render() {
    return (
      <View style={{ alignSelf:"center",paddingTop:20}}>
          <Text>{this.state.myText}</Text> 

          <TouchableOpacity onPress={this.store} style={{ alignSelf: 'center' , padding:20 }}>
                  <Text style={{fontSize:25}}>Store</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.retrieveData} style={{ alignSelf: 'center' }}>
                  <Text>gete</Text>
          </TouchableOpacity>
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
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4630EB',
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