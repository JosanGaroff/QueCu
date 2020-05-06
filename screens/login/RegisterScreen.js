import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import SelectSex from '../../components/SelectSex';
import BackButton from '../../components/BackButton';
import { theme } from '../../core/theme';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
  ageValidator,
  sexValidator,
  cityValidator,
  descriptionValidator,
} from '../../core/utils';

var todosUsuarios = [];

import {mainUrl, user, setUser, setAllUsers, allUsers} from '../../components/User';

const RegisterScreen = ({ navigation }) => {

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
          todosUsuarios = usuarios;
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


  function createUser(email, password, nombre, edad, descripcion, ciudad, sexo) {
              var data_file = mainUrl + 'FormRegistroServlet?email='+email+'&password='+password+'&descripcion='+descripcion+'&ciudad='+ciudad+'&nombre='+nombre+'&edad='+edad+'&sexo='+sexo;
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

                 if (http_request.readyState == 4 ) {
                    // Javascript function JSON.parse to parse JSON data
                    var jsonObj = JSON.parse(http_request.responseText);

                    usuario = jsonObj;
                    console.log(usuario);
                      setUser(usuario);
                      console.log(user);

                    if (user.email == email){
                      Alert.alert(
                        "Registro completado",
                        "¡Usuario creado con éxtio!",
                        [
                        {
                          text: "OK"
                        }
                      ],{cancelable: false}
                      );
                      todosUsuarios.push(usuario);
                      setAllUsers(todosUsuarios);
                      navigation.navigate('Dashboard');
                    }
                    else{
                      Alert.alert(
                        "Error en el registro",
                        "El email ya existe",
                        [
                        {
                          text: "OK"
                        }
                      ],{cancelable: false}
                      );
                    //  navigation.navigate('WrongLoginScreen');
                    }

                    // jsonObj variable now contains the data structure and can
                    // be accessed as jsonObj.name and jsonObj.country.
                   // document.getElementById("Name").innerHTML = jsonObj.name;
                   // document.getElementById("Country").innerHTML = jsonObj.country;
                 //}else{
                   //navigation.navigate('AlreadyRegisterScreen');
                 }
              }

              http_request.open("GET", data_file, true);
              http_request.send();
           }

 const [email, setEmail] = useState({ value: '', error: '' });
 const [password, setPassword] = useState({ value: '', error: '' });
 const [name, setName] = useState ({ value: '', error: '' })
 const [age, setAge] = useState({ value: '', error: '' });
 const [sex, setSex] = useState({ value: '', error: '' });
  const [city, setCity] = useState({ value: '', error: '' });
   const [description, setDescription] = useState({ value: '', error: '' });


  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const ageError = ageValidator(age.value);
    const sexError = sexValidator(sex.value);
    const cityError = cityValidator(city.value);
    const descriptionError = descriptionValidator(description.value);

    if (emailError || passwordError || nameError || ageError || cityError || descriptionError || sexError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setAge({ ...age, error: ageError });
      setSex({ ...sex, error: sexError });
      setCity({ ...city, error: cityError });
      setDescription({ ...description, error: descriptionError });
      return;
    }


    createUser(email.value, password.value, name.value, age.value, description.value, city.value, sex.value);
    getUsers();

  };

  return (
    <ScrollView>
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Crea tu cuenta</Header>


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
        returnKeyType="next"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <TextInput
        label="Edad"
        returnKeyType="next"
        value={age.value}
        onChangeText={text => setAge({ value: text, error: '' })}
        error={!!age.error}
        errorText={age.error}
      />

      <TextInput
        label="Ciudad"
        returnKeyType="next"
        value={city.value}
        onChangeText={text => setCity({ value: text, error: '' })}
        error={!!city.error}
        errorText={city.error}
      />

      <TextInput
        label="Descripción"
        returnKeyType="done"
        value={description.value}
        onChangeText={text => setDescription({ value: text, error: '' })}
        error={!!description.error}
        errorText={description.error}
      />

      <SelectSex
        label="Sexo"
        returnKeyType="next"
        selectedValue={sex.value}
        onValueChange={(itemValue, itemIndex) => setSex({ value: itemValue, error: '' })}
        error={!!sex.error}
        errorText={sex.error}
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Regístrate
      </Button>


      <View style={styles.row}>
        <Text style={styles.label}>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity  onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link} >Inicia sesión</Text>
        </TouchableOpacity>
      </View>

    </Background>
    </ScrollView>
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
    marginTop: 0,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);
