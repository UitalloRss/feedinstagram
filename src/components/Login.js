import React, {Component} from 'react';
import {Text, Button, TextInput, View} from 'react-native'
import firebase from 'firebase';

export class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            senha: '',
        }
        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp(){
        const {email, senha} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((result) =>{
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    render(){
        return(
            <View>
                <TextInput placeholder="email" onChangeText={(email) => this.setState({email})}/>
                <TextInput placeholder="senha" secureTextEntry={true} onChangeText={(senha) => this.setState({senha})}/>
                <Button onPress={() => this.onSignUp()} title="Login"/>
            </View>
        )
    }
}

export default Login;