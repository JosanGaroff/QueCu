import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import { theme } from '../../core/theme';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../../core/utils';

import {mainUrl, user, setUser} from '../../components/User';

var usuario = {ciudad:"", descripcion:"", edad: "", email:"", nombre:"", password:""};

const AlreadyRegisterScreen = ({ navigation }) => {

  function createUser(email, password, nombre, edad, descripcion, ciudad) {
              var data_file = mainUrl+'FormRegistroServlet?email='+email+'&password='+password+'&descripcion='+descripcion+'&ciudad='+ciudad+'&nombre='+nombre;
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

                    usuario = jsonObj;
                    console.log(usuario);
                      setUser(usuario);
                      console.log(user);

                    if (user.email != "none"){
                      navigation.navigate('Dashboard');
                    }
                    else{
                      alert("El email ya existe.");
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
 const [name, setName] = useState ({ value: '', error: '' })


  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    createUser(email.value, password.value, name.value, "0", "Descrición", "Ciudad");

  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>El email ya existe.</Header>

      <TextInput
        label="Nombre"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

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

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Regístrate
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(AlreadyRegisterScreen);
