
/*import { AppLoading, Asset, Font, Icon } from 'expo'
import React from 'react'
import { StatusBar, StyleSheet, View, Text, Button } from 'react-native'
import AppNavigator from './navigation/AppNavigator'
*/

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import React from 'react';
import { Provider } from 'react-native-paper';
import App from './screens';
import { theme } from './core/theme';

//var user = {ciudad:"Madrid", descripcion:"Nana", edad: "23", email:"", nombre:"Jose", password:""};
import localhost from './components/User';

const Main = () => (
//render(){
//  return(
  <Provider theme={theme}>
    <App />
  </Provider>

//)}
);


export default Main;


localhost = '192.168.0.11';  // PONER CADA UNO LA DIRECCIÓN IP DE SU ORDENADOR


/*  state = {
    data: [],
    isLoading: true,
    isLoadingComplete: false,
    isLogged: false,
  }
//  hacerLogin = (email, password) =>{
  hacerLogin = () =>{
    console.log("has pulsado")
    let url = new URL('http://'+localhost+':8080/ISST-20-TFG/FormLoginServlet')
    url.search = new URLSearchParams({
        email:'d',
        password:''
    })
    //fetch('http://'+localhost+':8080/ISST-20-TFG/FormLoginServlet?email=' + email + '&password=' + password, {
    fetch('http://'+localhost+':8080/ISST-20-TFG/FormLoginServlet?email=&password=', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',

          }
        })
    this.state.isLogged = true;
  }

   componentDidMount() {

    fetch('http://'+localhost+':8080/ISST-20-TFG/FormPeticionJson', {
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
render() {
  <Provider theme={theme}>
    <App />
  </Provider>
}
/*  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen && this.state.isLogged) {
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
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/splash.png'),
        require('./assets/icon.png'),
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


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
*/
