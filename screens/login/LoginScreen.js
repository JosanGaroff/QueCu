import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import { theme } from '../../core/theme';
import { emailValidator, passwordValidator } from '../../core/utils';
//import User from '../../components';
const localhost= '192.168.0.11';
/*
import { AppLoading, Asset, Font, Icon } from 'expo'
//import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigator from '../../navigation/AppNavigator'

/*export default class User extends React.Component {
  state = {
      data: [],
      isLoading: true,
      isLoadingComplete: false,
    //  isLogged: false,
    }
}*/
/*
var usuario = {
  getUser: function (email, password) {
    fetch('http://'+localhost+':8080/ISST-20-TFG/FormGetUser?email='+email+'&password='+password, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
    .then((response) => response.json())
        .then((json) => {
          //this.setState({ data: json });
          data = json;
          console.log(JSON.stringify(json));
        })
        .catch((error) => console.error(error))
        .finally(() => {
       //   this.setState({ isLoading: false });
         usuario = JSON.parse(data)
        });
      },
    removeItem: function(name){
        document.cookie = name ]'=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
    }
}
*/

var user = {ciudad:"Madrid", descripcion:"Nana", edad: "23", email:"", nombre:"Jose", password:""};

const LoginScreen = ({ navigation }) => {

   function loadUser(email, password) {
               var data_file = 'http://'+localhost+':8080/ISST-20-TFG/FormGetUser?email='+email+'&password='+password;
               var http_request = new XMLHttpRequest();
               try{
                  // Opera 8.0+, Firefox, Chrome, Safari
                  http_request = new XMLHttpRequest();
               }catch (e) {
                  // Internet Explorer Browsers
                  try{
                     http_request = new ActiveXObject("Msxml2.XMLHTTP");

                  }catch (e) {

                     try{
                        http_request = new ActiveXObject("Microsoft.XMLHTTP");
                     }catch (e) {
                        // Something went wrong
                        alert("Your browser broke!");
                        return false;
                     }

                  }
               }

               http_request.onreadystatechange = function() {

                  if (http_request.readyState == 4  ) {
                     // Javascript function JSON.parse to parse JSON data
                     var jsonObj = JSON.parse(http_request.responseText);

                     user = jsonObj;
                     console.log(user);

                     if (user.email != "none"){
                       navigation.navigate('Dashboard');
                     }
                     else{
                       navigation.navigate('WrongLoginScreen');
                     }

                     // jsonObj variable now contains the data structure and can
                     // be accessed as jsonObj.name and jsonObj.country.
                    // document.getElementById("Name").innerHTML = jsonObj.name;
                    // document.getElementById("Country").innerHTML = jsonObj.country;
                  }
               }

               http_request.open("GET", data_file, true);
               http_request.send();
            }

  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    loadUser(email.value, password.value);
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Nos alegramos de verte de vuelta.</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Contraseña"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.label}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Inicia sesión
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>¿No estás registrado? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});


export default memo(LoginScreen);
