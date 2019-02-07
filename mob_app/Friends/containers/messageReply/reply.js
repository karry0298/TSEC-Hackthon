import React from 'react';
import {FlatList, ActivityIndicator, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Button,Left,Container,List,ListItem,Content,Thumbnail} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { FileSystem, FaceDetector, MediaLibrary, Permissions } from 'expo';

export class Reply extends React.Component {
  


  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true
    }
  }

  componentDidMount(){
    return fetch('http://10.42.0.12:3000/message')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function(){

        });

        console.warn(this.state.dataSource[0].message)

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:5}}>

        
          <List
            dataArray={this.state.dataSource}
            renderRow={data => {

              console.warn(data.message)
              return (
                <ListItem >
                  <Text blurRadius={1} style={{flex:0.8, color:'black' , fontSize:18, elevation:3}}>{data.message}</Text>
                  <Ionicons name={"md-close-circle-outline"} style={{position: 'absolute', right: 20}} size={40} color="red" /> 
                </ListItem>
              );
            }}
          />



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