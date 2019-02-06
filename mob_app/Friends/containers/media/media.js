import React from 'react';
import { Image, StyleSheet, View,FlatList, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FileSystem, FaceDetector, MediaLibrary, Permissions } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import { List } from 'native-base';
import Cardss from '../cards/card';
import { LinearGradient } from 'expo';


export class Media extends React.Component {
   //User = require('./Camera').default ;

   state = {
    i : -1
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('imgs','NO-ID');
    dumLis = ["Hackthon","The Innovation doctor"]
    
    return (
      
      <LinearGradient colors={['#ccffff', '#bdcff5']} style={{flex:1 , backgroundColor:'#36d1dc'}}>

        <View >
          <ScrollView>
          
          <List dataArray={itemId} 
              renderRow={data => {
    
                console.warn(this.state.i)
                
                this.state.i = this.state.i + 1

                dat = data.toString()
                console.warn(dat)
                return (     
                  <Cardss logoUri={{uri:dat}} textUri={dumLis[this.state.i]} />

                  );
                
              }}
            />

            <Cardss logoUri={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Pekka_Haavisto_-_World_NGO_Day%2C_Finland.jpg/1200px-Pekka_Haavisto_-_World_NGO_Day%2C_Finland.jpg'}} textUri={"Global Teaching Learning"}/>
            <Cardss logoUri={{uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201608/children-story_647_081616082125.jpg'}} textUri={"Children day Fun day"}/>
            <Cardss logoUri={{uri: 'http://safe-ngo.in/images/home-slides/slide-03.jpg'}} textUri={"Interactive learning Day"} />
          </ScrollView>
        </View>
      </LinearGradient>  
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