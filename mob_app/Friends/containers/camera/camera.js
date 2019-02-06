import React from 'react';
import {AsyncStorage,StyleSheet,Text,TouchableOpacity,KeyboardAvoidingView,View} from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import {Button, Item, Input} from 'native-base';
import { Camera, Permissions } from 'expo';

export class Came extends React.Component {

    static navigationOptions = {
        headerTitleStyle: { alignSelf: 'center' },
        title: 'Center Title',
        header: !null
    }
    
    // static imgList = ["aasdag","ghdhccghcd"]

    // static getCurrentUser() {
    //     return imgList;
    // }

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        listMy:[]
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

        onPictureSaved = async photo => {
            await FileSystem.moveAsync({
              from: photo.uri,
              to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`,
            });
            this.setState({ newPhotos: true });
        }

      snap = async () => {
        if (this.camera) {
          let photo = await this.camera.takePictureAsync();
          console.warn(photo);
          this.state.listMy.push(photo.uri)
          console.warn(this.state.listMy)
        }
      };

      onMedia(){
        this.props.navigation.navigate('media',{imgs:this.state.listMy})
      }
    

  render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
        return <View />;
        } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
        } else {
        return (
            <View style={{ flex: 1 }}>

                <Camera style={{ flex: 1 , height:450 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
                    <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                        flex: 1,
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
                        style={{ fontSize: 25, marginBottom: 10,marginRight:90, color: 'white' }}>
                        {' '}Flip{' '}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.snap} style={{ alignSelf: 'center' }}>
                            <Ionicons style={{marginTop:480,marginRight:72}} name="ios-radio-button-on" size={100} color="white" />
                    </TouchableOpacity>

                    <Button rounded onPress = { () => this.onMedia()} style={{marginRight:10 , marginBottom:8,justifyContent:'center', backgroundColor:'#ffffff',alignSelf: 'flex-end'}}>
                        <Text>        View       </Text>
                    </Button>

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