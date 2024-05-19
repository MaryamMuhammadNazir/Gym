import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../../screens';
import Routes from '../Routes';
import Splash from '../../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.SPLASH_SCREEN} component={Splash} />
      <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export {DashboardStack};
