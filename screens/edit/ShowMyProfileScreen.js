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

const { pic, title } = myProfile[0];

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

const ShowMyProfileScreen = ({ navigation }) => {

   const _onSignUpPressed = () => {
     navigation.navigate('EditMyProfileScreen');
   };

      imprime();

      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={pic} style={styles.image} />
          </View>
          <Text h4 style={styles.name}>
            {user.nombre}, {user.edad}
          </Text>
          <Text style={styles.desc}> Ciudad: {user.ciudad}</Text>
          <Divider style={styles.divider} />
          <Text style={styles.desc}>
            {user.descripcion}
          </Text>

          <Divider style={styles.divider} />

          <Text style={styles.desc}>Mis redes sociales:</Text>
          <View style={styles.socialLinks}>
            <Social name="snapchat" />
            <Social name="instagram" />
            <Social name="facebook-square" />
          </View>
          <Button onPress={_onSignUpPressed}>
          <Text style={styles.link} >Editar Perfil</Text>
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

export default memo(ShowMyProfileScreen);
