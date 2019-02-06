import React from 'react';
import {AsyncStorage,StyleSheet,Text,TouchableOpacity,KeyboardAvoidingView,View} from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import {Button, Item, Input} from 'native-base';
import { Camera, Permissions } from 'expo';

export class Came extends React.Component {
    
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
      };

      
    
      async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }


        takePicture = () => {
            if (this.camera) {
            this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
            }
        };

      snap = async () => {
        if (this.camera) {
          let photo = await this.camera.takePictureAsync();
          console.warn(photo);
        }
      };
    

  render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
        return <View />;
        } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
        } else {
        return (
            <View style={{ flex: 1 }}>

                <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
                    <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                        flex: 0.3,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        }}
                        onPress={() => {
                        this.setState({
                            type: this.state.type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back,
                        });
                        }}>
                        <Text
                        style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                        {' '}Flip{' '}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.snap} style={{ alignSelf: 'center' }}>
                            <Ionicons style={{marginTop:480,paddingLeft:105}} name="ios-radio-button-on" size={70} color="white" />
                    </TouchableOpacity>

                    </View>
                </Camera>
            </View>
        );
        }
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
      }, 
      bottom: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize:14
        },
      top: {
        textAlign:"center", 
        color: '#ffffff' , 
        fontSize:45,
        marginTop:115,
      }
    })