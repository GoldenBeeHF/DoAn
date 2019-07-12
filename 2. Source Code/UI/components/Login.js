import React, {Component} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Keyboard, Image, 
    TouchableWithoutFeedback, TextInput, TouchableOpacity, 
    KeyboardAvoidingView, StatusBar, BackHandler, ImageBackground} from 'react-native'



export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: true,
            keyboard: false
        }
    }

    ShowHideComponent = () => {
        if (this.state.show == true) {
          this.setState({ show: false });
        } else {
          this.setState({ show: true });
        }
      };

      dissmissKeyBoard = () => {
        Keyboard.dismiss()
        this.setState({show:true})
      }

      componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          this._keyboardDidHide,
        );
      }

      componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
      }
    
      _keyboardDidShow = () => {
        // alert('Keyboard Shown');
        this.setState({show:false})
      }
    
      _keyboardDidHide = () => {
        // alert('Keyboard Hidden');
        this.setState({show:true})
      }
    
      render() {
        return <TextInput onSubmitEditing={Keyboard.dismiss} />;
      }

    render(){
        return(
            <ImageBackground 
                source = {require('../icons/bg.jpg')}
                style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <TouchableWithoutFeedback
                    onPress = {this.dissmissKeyBoard}
                >
                    <KeyboardAvoidingView 
                    style = {styles.containerKeyboard}
                    behavior = "padding">
                        {this.state.show ? (
                        <View 
                            style = {styles.logoContainer}>
                            <Image 
                                style = {styles.logo}
                                source = {require('../icons/logo.png')}
                            ></Image>
                            <Text style = {styles.title}>WE CODE FOR YOU</Text>
                        </View>
                        ) : null}
                        <View style = {styles.infoContainer}>
                            <TextInput
                                style = {styles.input}
                                placeholder = "Enter username/email"
                                placeholderTextColor = 'rgba(255,255,255,0.8)'
                                keyboardType = 'email-address'
                                returnKeyType = 'next'
                                autoCorrect={false}
                                onSubmitEditing={() => this.refs.txtPassword.focus()}
                            ></TextInput>
                            <TextInput
                                style = {styles.input}
                                placeholder = "Enter password"
                                placeholderTextColor = 'rgba(255,255,255,0.8)'
                                returnKeyType = 'go'
                                secureTextEntry
                                autoCorrect={false}
                                ref = {"txtPassword"}
                            ></TextInput>
                            <TouchableOpacity
                                style = {styles.buttonContainer}
                            >
                                <Text style={styles.textButton}>LOGIN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.registerText}>Register</Text>
                            </TouchableOpacity>
                            <Text style={styles.orText}>OR</Text>
                            <View 
                                style = {styles.loginAnother}>
                                <Image source={require('../icons/facebook.png')}
                                    style = {styles.loginImage}
                                />
 
                                <Image source={require('../icons/google.png')}
                                    style = {styles.loginImage}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </ImageBackground>
        )
    }
}

styles = StyleSheet.create({
    container : {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: "column",
    },
    containerKeyboard : {
        flex: 1,
        flexDirection: "column",
        paddingTop: 50
    },
    textButton : {
        // fontSize: 18,
        color: "#FFF",
        textAlign: "center"
    },
    logoContainer : {
        marginTop: 50,
        alignItems: 'center',
        flex: 1,
    },
    logo : {
        width:60,
        height: 60,
    },
    infoContainer : {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 300,
        padding: 20,
    },
    input : {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 40,
        color: "#FFF",
        paddingHorizontal: 7,
        marginVertical: 5,
    },
    title : {
        fontSize: 25,
        color: '#FFF',
        textAlign: "center",
        marginTop: 3,
        opacity: 0.9,
        fontWeight: 'bold'
    },
    buttonContainer : {
        backgroundColor: '#3284C1',
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    registerText : {
        fontSize:15,
        textAlign:'right',
        color: '#FFF'    
    },
    orText : {
        fontSize:15,
        textAlign:'center',
        color: '#FFF'    
    },
    loginAnother : {
        flexDirection: 'row',
        justifyContent:'center'
    },
    loginImage : {
        borderRadius: 20,
        height:40,
        width:40,
        margin: 15,
    }
})