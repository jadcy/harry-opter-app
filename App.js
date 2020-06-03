import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      House: '',
      buttonText: 'Sort!'
    }
  }
  render(){
    return (
    <View style={styles.container}>
      <Text>{this.state.House}</Text>
      <Button
        loading={this.state.buttonLoading}
        title={this.state.buttonText}
        color='#6734d1'
        onPress={() => {
            this.setState({
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
                 })
              })
              .catch((error) => {
                 console.error(error);
              });
          }}
      ></Button>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}/>
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
