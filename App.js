import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
// import {Text} from 'galio-framework';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
    House: '',
    // buttonLoading: false,
    buttonText: 'Sort!'
    }
  }
  render(){
    return (
    <View style={styles.container}>
      {/* <NavBar title='Sorting'></NavBar> */}

      <Text>{this.state.House}</Text>
      <Button 
      loading={this.state.buttonLoading}
      title={this.state.buttonText}
      color='#6734d1'
      onPress={() => {
    this.setState({
      // buttonLoading: true,
      buttonText: 'Loading...'
    })
    fetch('https://www.potterapi.com/v1/sortingHat', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            House: responseJson,
            buttonText: 'Sort!',
            // buttonLoading: false
         })
      })
      .catch((error) => {
         console.error(error);
      });
  }} 
></Button>
    </View>

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
