import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoginScreen, SignupScreen} from '../../screens';
import Routes from '../Routes';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={Routes.SIGNUP_SCREEN} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export {AuthStack};
