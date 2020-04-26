import { AppLoading, Asset, Font, Icon } from 'expo'
import React from 'react'
import { StatusBar, StyleSheet, View, Text, Button } from 'react-native'
import AppNavigator from './navigation/AppNavigator'

localhost = '192.168.1.43';  // PONER CADA UNO LA DIRECCIÓN IP DE SU ORDENADOR


export default class App extends React.Component {
  state = {
    data: [],
    isLoading: true,
    isLoadingComplete: false,
  }

  hacerLogin = () =>{
    console.log("has pulsado")
    let url = new URL('http://'+localhost+':8080/ISST-20-TFG/FormLoginServlet')
    url.search = new URLSearchParams({
        email:'d',
        password:''
    })
    fetch('http://'+localhost+':8080/ISST-20-TFG/FormLoginServlet', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            
          }
        })
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
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <View style={styles.container}>
        <Text >
        {String(JSON.stringify(this.state.data))}
        </Text>

        <Button onPress={this.hacerLogin} title="Pulsa para login" />



          <StatusBar hidden />
          <AppNavigator />
        </View>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/splash.png'),
        require('./assets/images/icon.png'),
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
