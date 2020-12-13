import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Feed from './src/pages/Feed';

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'

import TelaPrincipal from './src/components/Landing'
import TelaRegistrar from './src/components/Registrar'
import TelaLogin from './src/components/Login'

import * as firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKoSqeH4yqE-xcPRfrWsgoSNizHTUAw_s",
  authDomain: "fir-instagram-35e66.firebaseapp.com",
  projectId: "fir-instagram-35e66",
  storageBucket: "fir-instagram-35e66.appspot.com",
  messagingSenderId: "664261330408",
  appId: "1:664261330408:web:1ecf1623998637cb00d05d",
  measurementId: "G-6TCTYMRXG0"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator()

export class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      loaded: false,
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  
  render(){
    const {loggedIn, loaded} = this.state;
    if(!loaded){
      return(
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }

    if(!loggedIn){
      return (
        <View style={style.container}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
              <Stack.Screen name="Landing" component={TelaPrincipal} />
              <Stack.Screen name="Registrar" component={TelaRegistrar} />
              <Stack.Screen name="Login" component={TelaLogin}/>
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      )
    }

    return (
      <View style={style.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen name="Instagram" component={Feed}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}

export default App

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff' 
    }
  }
)


