import React, { memo } from 'react';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>¡Bienvenido a Quecu!</Header>

    <Paragraph>
      Accede a tu cuenta o regístrate si es tu primera vez.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Inicia sesión
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}>
      Regístrate
    </Button>
  </Background>
);

export default memo(HomeScreen);
