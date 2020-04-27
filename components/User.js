localhost = '192.168.0.11';

export default class User extends React.Component {
  state = {
    user: ,
    data: [],
    isLoading: true,
    isLoadingComplete: false,
  }

   getUser(email, password) {

    fetch('http://'+localhost+':8080/ISST-20-TFG/FormGetUser?email='+email+'&password='+password, {
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
*/
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
