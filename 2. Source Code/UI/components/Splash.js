import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Splash extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>this is splash</Text>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text : {
        fontSize: 25,
        color: '#a1a1a1'
    },
})