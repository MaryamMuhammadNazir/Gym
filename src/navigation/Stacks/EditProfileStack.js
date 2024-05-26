import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoginScreen, SignupScreen} from '../../screens';
import Routes from '../Routes';
import EditProfile from '../../screens/EditProfile';
import FullScreenVideo from '../../screens/Dashboard/FullScreen/FullScreenVideo';

const Stack = createNativeStackNavigator();

const EditProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.EDITPROFLE} component={EditProfile} />
      <Stack.Screen ame={Routes.FULLSCREEN} component={FullScreenVideo} />
    </Stack.Navigator>
  );
};

export {EditProfileStack};
