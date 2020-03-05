import { AppLoading, Asset, Font, Icon } from 'expo'
import React from 'react'
import { StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native'
import AppNavigator from './navigation/AppNavigator'

export default class App extends React.Component {
  state = {
    email:'',
    password: '',
    isLoadingComplete: false,
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
          <StatusBar hidden />
          <AppNavigator />
        </View>
      )
    }
  }

  saveData =async()=>{
    const {email,password} = this.state;

    //save data with asyncstorage
    let loginDetails={
        email: email,
        password: password
    }

    if(this.props.type !== 'Login')
    {
        AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

        Keyboard.dismiss();
        alert("You successfully registered. Email: " + email + ' password: ' + password);
        this.login();
    }
    else if(this.props.type == 'Login')
    {
        try{
            let loginDetails = await AsyncStorage.getItem('loginDetails');
            let ld = JSON.parse(loginDetails);

            if (ld.email != null && ld.password != null)
            {
                if (ld.email == email && ld.password == password)
                {
                    alert('Go in!');
                }
                else
                {
                    alert('Email and Password does not exist!');
                }
            }

        }catch(error)
        {
            alert(error);
        }
    }
}

  showData = async()=>{
      let loginDetails = await AsyncStorage.getItem('loginDetails');
      let ld = JSON.parse(loginDetails);
      alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
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
