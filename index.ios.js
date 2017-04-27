import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, TextInput } from 'react-native';


class Greeting extends Component{
  //only required method is the render method
  //constructor
  constructor(props){
    super(props);

    this.state = {
      name: this.props.name
    }
  }

  render(){

    return (
      <View>
      <TextInput
        style={{height: 40}}
        placeholder="Please type is your name!"
        onChangeText={(name) => this.setState({name})}
      />
      <Text>Hello {this.state.name}!</Text>
      </View>
    );
  }
}


class LearnerProject extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={{alignItems: 'center'}}>
        <Image source={pic} style={{ width: 193, height: 110}}/>
        <Text>Hi there, what is your name?</Text>
        <Greeting name='Nikhil'/>
      </View>
    );
  }
}

AppRegistry.registerComponent('LearnerProject', () => LearnerProject);
