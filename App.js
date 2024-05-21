import { View, Text } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import store, { persister } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from './src/assets';

export const navigationRef = createNavigationContainerRef();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <NavigationContainer ref={navigationRef}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
              <RootStack />
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
