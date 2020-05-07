import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import { theme } from '../../core/theme';
import { emailValidator, passwordValidator } from '../../core/utils';
//import User from '../../components';

import {mainUrl, user, setUser, allUsers, setAllUsers} from '../../components/User';

import {setAllEventos, getAllEventos, eventos} from '../../components/Eventos';

var usuario = {ciudad:"", descripcion:"", edad: "", email:"", nombre:"", password:""};

const LoginScreen = ({ navigation }) => {

  function getEventos() {
    var data_file = mainUrl+'FormGetAllEventos';
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

       if (http_request.readyState == 4 && http_request.status == 200 ) {
          // Javascript function JSON.parse to parse JSON data
          var jsonObj = JSON.parse(http_request.responseText);
          setAllEventos(jsonObj);
          console.log('\n\n\n\n-----Los eventos-----\n\n\n\n');
          console.log(jsonObj);
          console.log('\n\n\n\n-----Los eventos fin-----\n\n\n\n');

          // jsonObj variable now contains the data structure and can
          // be accessed as jsonObj.name and jsonObj.country.
         // document.getElementById("Name").innerHTML = jsonObj.name;
         // document.getElementById("Country").innerHTML = jsonObj.country;
       }

    }

    http_request.open("GET", data_file, true);
    http_request.send();
    console.log("Eventos------------->" + eventos );
  }

  function getUsers() {
    var data_file = mainUrl+'FormGetAllUsers';
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

       if (http_request.readyState == 4 && http_request.status == 200 ) {
          // Javascript function JSON.parse to parse JSON data
          var jsonObj = JSON.parse(http_request.responseText);
          usuarios=jsonObj;
          setAllUsers(usuarios);
          console.log('\n\n\n\n-----Los usuarios-----\n\n\n\n');
          console.log(usuarios);
          console.log('\n\n\n\n-----Los usuarios-----\n\n\n\n');

          // jsonObj variable now contains the data structure and can
          // be accessed as jsonObj.name and jsonObj.country.
         // document.getElementById("Name").innerHTML = jsonObj.name;
         // document.getElementById("Country").innerHTML = jsonObj.country;
       }

    }

    http_request.open("GET", data_file, true);
    http_request.send();
  }

   function loadUser(email, password) {
               var data_file = mainUrl+'FormGetUser?email='+email+'&password='+password;

               fetch(data_file, {
         method: 'GET',
         headers: {
             'Accept': 'application/json',
             'Content-type': 'application/json'
           }
         })
     .then((response) => response.json())
         .then((json) => {
          usuario = json;
                     
                     setUser(usuario)
                     
          console.log("USUARIOOOOOOOOOO--------------------->" +json);

          
          
           //this.setState({ eventos: json });
         })
         .catch((error) => console.error(error))
         .finally(() => {

          if (user.email == email){
                       navigation.navigate('Dashboard');
                     }
                     else{
                       Alert.alert(
                         "Error al hacer login",
                         "Email y/o contraseña incorrectos",
                         [
                         {
                           text: "OK"
                         }
                       ],{cancelable: false}
                       );
                      // navigation.navigate('WrongLoginScreen');
                     }
    //    

         });


/*

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

                  if (http_request.readyState == 4 && http_request.status == 200) {
                     // Javascript function JSON.parse to parse JSON data
                     var jsonObj = JSON.parse(http_request.responseText);

                     usuario = jsonObj;
                     console.log(usuario);
                     setUser(usuario)
                     console.log(user);

                     if (user.email == email){
                       navigation.navigate('Dashboard');
                     }
                     else{
                       Alert.alert(
                         "Error al hacer login",
                         "Email y/o contraseña incorrectos",
                         [
                         {
                           text: "OK"
                         }
                       ],{cancelable: false}
                       );
                      // navigation.navigate('WrongLoginScreen');
                     }

                     // jsonObj variable now contains the data structure and can
                     // be accessed as jsonObj.name and jsonObj.country.
                    // document.getElementById("Name").innerHTML = jsonObj.name;
                    // document.getElementById("Country").innerHTML = jsonObj.country;
                  }
                  //else{
                    Alert.alert(
                      "Error al contactar con el servidor",
                      "Por favor, inténtelo de nuevo",
                      [
                      {
                        text: "OK"
                      }
                    ],{cancelable: false}
                    );
                  }
               }

               http_request.open("GET", data_file, true);
               http_request.send();

              */


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
    getUsers();
    getEventos();
/*
    if (user.email != "none"){
      navigation.navigate('Dashboard');
    }else{
      navigation.navigate('WrongLoginScreen');
    }*/
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Nos alegramos de verte.</Header>

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

/*      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.label}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>*/
