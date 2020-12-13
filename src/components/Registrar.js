import React, {Component} from 'react';
import {Text, Button, TextInput, View} from 'react-native'
import firebase from 'firebase';

export class Registrar extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            senha: '',
            nome: '' 
        }
        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp(){
        const {email, senha, nome} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, senha)
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
                <TextInput placeholder="nome" onChangeText={(nome) => this.setState({nome})}/>
                <TextInput placeholder="email" onChangeText={(email) => this.setState({email})}/>
                <TextInput placeholder="senha" secureTextEntry={true} onChangeText={(senha) => this.setState({senha})}/>
                <Button onPress={() => this.onSignUp()} title="Registrar"/>
            </View>
        )
    }
}

export default Registrar;