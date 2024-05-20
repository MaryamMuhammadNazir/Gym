import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { AuthStack, DashboardStack } from './Stacks';
import Routes from './Routes';
import BottomTab from './BottomTabNavigation/index.js';
import Splash from '../screens/SplashScreen/index.js';
const Stack = createNativeStackNavigator();
const RootStack = () => {
  let isLogin = useSelector(state => state.auth?.user);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {true ? (
        // <Stack.Screen
        //   name={Routes.DASHBOARD_STACK}
        //   component={DashboardStack}
        // />
        <>
          <Stack.Screen name={Routes.SPLASH_SCREEN} component={Splash} />
          <Stack.Screen name={Routes.BOTTOM_TAB} component={BottomTab} />
        </>
      ) : (

        <Stack.Screen name={Routes.BOTTOM_TAB} component={BottomTab} />
        // <Stack.Screen name={Routes.BOTTOM_TAB} component={BottomTab} />
        // <Stack.Screen name={Routes.AUTH_STACK} component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
