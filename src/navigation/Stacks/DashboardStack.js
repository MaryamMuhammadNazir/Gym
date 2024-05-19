import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Routes from '../Routes';
import Splash from '../../screens/SplashScreen';
import BottomTab from '../BottomTabNavigation';

const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.SPLASH_SCREEN} component={Splash} />
      <Stack.Screen name={Routes.HOME_SCREEN} component={BottomTab} />
    </Stack.Navigator>
  );
};

export {DashboardStack};
