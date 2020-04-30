import React, { memo } from 'react';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';

//Antiguas importaciones de App.js
import { AppLoading, Asset, Font, Icon } from 'expo'
//import React from 'react'
import { StatusBar, StyleSheet, View, Text } from 'react-native'
import AppNavigator from '../../navigation/AppNavigator'

import { mainUrl,  user } from './LoginScreen';


/*  state = {

    data: [],
    isLoading: true,
    isLoadingComplete: false,
    isLogged: false,
  }
  */
//  hacerLogin = (email, password) =>{
/*    console.log("has pulsado")
    let url = new URL('http://'+localhost+':8080/ISST-20-TFG/FormLoginServlet')
    url.search = new URLSearchParams({
        email:'d',
        password:''
    })
    //fetch('http://'+localhost+':8080/ISST-20-TFG/FormLoginServlet?email=' + email + '&password=' + password, {
    fetch('http://'+localhost+':8080/ISST-20-TFG/FormGetUser?email=' + email + '&password=' + password, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',

          }
        })
    this.state.isLogged = true;
  }
*/
componentDidMount = () =>{

    fetch(mainUrl+'FormPeticionJson', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
    .then((response) => response.json())
        .then((json) => {
          this.setState({ data: json });
          console.log(this.state.data);
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });

  }

/*  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else if(!this.state.isLogged){
      return (
        <View style={styles.container}>
        <Button onPress={this.hacerLogin} title="Pulsa para login" />
          <StatusBar hidden />
        </View>
      )
    }

    else{
      return (
        <View style={styles.container}>
        <Text >
        {String(JSON.stringify(this.state.data))}
        </Text>
          <StatusBar />
          <AppNavigator />
        </View>
      )
    }
  }*/

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('../../assets/splash.png'),
        require('../../assets/icon.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.MaterialIcons.font,
        ...Icon.MaterialCommunityIcons.font,
        ...Icon.FontAwesome.font,
        ...Icon.Feather.font,
      }),
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})



const Dashboard = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar />
    <AppNavigator />
  </View>
);

/*const Dashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </Background>
);
*/
export default memo(Dashboard);
