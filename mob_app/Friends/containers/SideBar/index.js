import React from "react";
import { AppRegistry, Image, StatusBar,Text } from "react-native";
import { Button,Container,List,ListItem,Content,Icon,Thumbnail} from "native-base";
import { LinearGradient } from 'expo';

//const routes = ["Cam", "Ram"];

const routes = [{title:"camera" },{title:"media"},{title:"admin"},{title:"messg"}];

export default class SideBar extends React.Component {
  render() {
    
    return (    
      
      <Container>
        <LinearGradient colors={['#36d1dc', '#5b86e5']} style={{height: 620,width: 280}} >  
        <Content>  
          
        <Image
            source={require('../../assets/Images/profile_bk_pict.jpg')}
            style={[{
              height: 170,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute",
            }]}
          />
          
          <Image
            style={[{
              height: 120,
              width: 120,
              borderRadius: 150,
              left:72,
              top: 12,
              shadowColor: '#202020'
            }]}
            source={require('../../assets/Images/icon_logo_t.png')}
          />
          <Text blurRadius={1} style={{color:'white' , left:19 ,right:2 , fontSize:17 , top:19, elevation:3}}>Welcome To Night Raid's Profile</Text>
        
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 35 }}
            renderRow={data => {
              return (
                <ListItem button onPress={() => this.props.navigation.navigate(data.title)}>
                  <Text blurRadius={1} style={{color:'#ffffff' , fontSize:25, paddingLeft:20 ,paddingRight:5, elevation:3}}>{data.title}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
        </LinearGradient>
      </Container>

    );
  }
}