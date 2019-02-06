import React from 'react';
import { Image, StyleSheet, View,FlatList, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FileSystem, FaceDetector, MediaLibrary, Permissions } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import Cardss from '../cards/card'

export class Media extends React.Component {

  render() {
    return (
      <View style={styles.container}>
         <ScrollView>
          <Cardss logoUri={require('../../assets/Images/icon_logo_t.png')} />
          <Cardss logoUri={require('../../assets/Images/icon_logo_t.png')} />
          <Cardss logoUri={require('../../assets/Images/icon_logo_t.png')} />
         </ScrollView>
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