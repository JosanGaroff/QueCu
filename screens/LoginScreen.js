import React from 'react'
import { SafeAreaView , StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native'

import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'

//import Routes from './Routes';


class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
        onChangeText={(email) => this.setState({email})}
        underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Email"
        placeholderTextColor = "#002f6c"
        selectionColor="#fff"
        keyboardType="email-address"
        onSubmitEditing={()=> this.password.focus()}/>
        
        <TextInput style={styles.inputBox}
        onChangeText={(password) => this.setState({password})} 
        underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor = "#002f6c"
        ref={(input) => this.password = input}
        />

        <TouchableOpacity style={styles.button}> 
            <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
        </TouchableOpacity>
        
      </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  inputBox: {
      width: 300,
      backgroundColor: '#eeeeee', 
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#002f6c',
      marginVertical: 10
  },
  button: {
      width: 300,
      backgroundColor: '#4f83cc',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 12
  },
  buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
  }
});

export default LoginScreen