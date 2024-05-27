import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen, LoginScreen, SignupScreen} from '../../screens';
import Routes from '../Routes';
import EditProfile from '../../screens/EditProfile';
import Accountsetting from '../../screens/Auth/Accountsetting';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
      <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={Routes.EDITPROFLE} component={EditProfile} />
      <Stack.Screen name={Routes.ACCOUNTSETTING} component={Accountsetting} />
    </Stack.Navigator>
  );
};

export {HomeStack};
