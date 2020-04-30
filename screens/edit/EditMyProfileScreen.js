import React, { memo, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import { Divider, Icon, Text } from 'react-native-elements'
import Layout from '../../constants/Layout'
import { HomeScreenPics, myProfile } from '../../constants/Pics'
import { randomNo } from '../../utils/randomNo'

import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { theme } from '../../core/theme';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
  ageValidator,
  cityValidator,
  descriptionValidator,
} from '../../core/utils';

import {mainUrl, user, setUser} from '../../components/User';

//var editando = false;

  const Social = ({ name }) => (
    <Icon
      name={name}
      type="font-awesome"
      containerStyle={styles.iconContainer}
      size={32}
    />
  )

  const imprime = () => {
    console.log(user);
  }

const EditMyProfileScreen = ({ navigation }) => {

  function editUser(email, password, nombre, edad, descripcion, ciudad) {
              var data_file = mainUrl + 'FormGetEditarPerfil?email='+email+'&password='+password+'&descripcion='+descripcion+'&ciudad='+ciudad+'&nombre='+nombre+'&edad='+edad;
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

                    if (user.email != "none"){
                      Alert.alert(
                        "Completado",
                        "¡Perfil actualizado con éxtio!",
                        [
                        {
                          text: "OK"
                        }
                      ],{cancelable: false}
                      );
                      navigation.navigate('ShowMyProfileScreen');
                    }
                    else{
                      Alert.alert(
                        "Error al editar usuario",
                        "La dirección de email está usada por otro usuario",
                        [
                        {
                          text: "OK"
                        }
                      ],{cancelable: false}
                      );
                    }
                 }
              }

              http_request.open("GET", data_file, true);
              http_request.send();
           }

  const [email, setEmail] = useState({ value: user.email, error: '' });
  const [password, setPassword] = useState({ value: user.password, error: '' });
  const [name, setName] = useState ({ value: user.name, error: '' })
  const [age, setAge] = useState({ value: user.age, error: '' });
   const [city, setCity] = useState({ value: user.city, error: '' });
    const [description, setDescription] = useState({ value: user.description, error: '' });


   const _onSignUpPressed = () => {
     const nameError = nameValidator(name.value);
     const emailError = emailValidator(email.value);
     const passwordError = passwordValidator(password.value);
     const ageError = ageValidator(age.value);
     const cityError = cityValidator(city.value);
     const descriptionError = descriptionValidator(description.value);

     if (emailError || passwordError || nameError || ageError || cityError || descriptionError) {
       setName({ ...name, error: nameError });
       setEmail({ ...email, error: emailError });
       setPassword({ ...password, error: passwordError });
       setAge({ ...age, error: ageError });
       setCity({ ...city, error: cityError });
       setDescription({ ...description, error: descriptionError });
       return;
     }

     editUser(email.value, password.value, name.value, age.value, description.value, city.value);

   };

      imprime();

      return (
        <SafeAreaView style={styles.container}>
      <TextInput
        label="Nombre"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
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
      <Button onPress={_onSignUpPressed}>
      <Text style={styles.link} >Guardar cambios</Text>
      </Button>
    </SafeAreaView>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    margin: 20,
  },
  image: {
    width: Layout.window.width - 60,
    height: Layout.window.height / 2 - 60,
    borderRadius: 20,
  },
  name: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  desc: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
  },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: Layout.window.width,
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
})

export default memo(EditMyProfileScreen);
