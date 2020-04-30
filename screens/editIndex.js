import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  ShowMyProfileScreen,
  EditMyProfileScreen,
} from './edit';

const Router = createStackNavigator(
  {
    ShowMyProfileScreen,
    EditMyProfileScreen,
  },
  {
    initialRouteName: 'ShowMyProfileScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
