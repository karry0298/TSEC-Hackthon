import React from 'react';
import { StyleSheet, Text, View } from 'react-native';   
import { Login } from './containers/login/login';
import { Message } from './containers/message/message';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Message/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
``