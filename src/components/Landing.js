import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Landing({navigation}){
    return(
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Button title="Registrar" onPress={() => navigation.navigate("Registrar")}/>
            <Button title="Login" onPress={() => navigation.navigate("Login")}/>
        </View>
    )
}