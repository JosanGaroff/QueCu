import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  HomeScreen,
  LoginScreen,
  WrongLoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from './login';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    WrongLoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
