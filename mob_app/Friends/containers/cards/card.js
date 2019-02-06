import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FileSystem, FaceDetector, MediaLibrary, Permissions } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

export default class Cardss extends React.Component {

  render() {
    return (
      <View style={{width: 370 , alignSelf:"center",paddingTop:5}}>
         <Card>            
            <CardItem style={{height:55}}>
              <Left>
                <Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={require('../../assets/Images/profile_bk_pict.jpg')} />
                <Body>
                  <Text style={{fontSize:20,paddingLeft:20}}>{this.props.textUri}</Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>
              <Image source={this.props.logoUri} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            
          </Card> 
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