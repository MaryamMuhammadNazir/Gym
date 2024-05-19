import React from 'react';
import {Image, Platform, Text, View, StatusBar, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../../screens/SplashScreen';
import Routes from '../Routes';
import {HomeScreen} from '../../screens';
import {Colors, Images} from '../../assets';
import Workout from '../../screens/Dashboard/WorkOutScreen';
import MealScreen from '../../screens/Dashboard/Mealscreen';
import Sound from '../../screens/Dashboard/Sound';
import {home} from '../../assets/icons';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({navigation}) {
  const screenOptions = {
    tabBarShowLabel: true,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.tabbgclr,
    },
  };

  return (
    <SafeAreaView style={styles.MainView}>
      <View>
        {/* {Platform.OS === "ios"&& (
          <StatusBar barStyle="dark-content" />
        ) */}
        <StatusBar barStyle="light-content" backgroundColor={Colors.tabbgclr} />
        {/* )} */}
      </View>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name={Routes.HOME_SCREEN}
          component={HomeScreen}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                  }}>
                  <Text
                    style={{
                      color: focused ? Colors.primary : Colors.white,
                      fontSize: 10,
                      paddingBottom: 7,
                    }}>
                    Home
                  </Text>
                </View>
              );
            },

            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: 10,
                  }}>
                  <Image
                    source={Images.HOME_ICON}
                    style={{width: 20, height: 20}}
                    tintColor={focused ? Colors.primary : Colors.white}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={Routes.Work_Out}
          component={Workout}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                  }}>
                  <Text
                    style={{
                      color: focused ? Colors.primary : Colors.white,
                      paddingBottom: 7,
                      fontSize: 10,
                    }}>
                    Work out
                  </Text>
                </View>
              );
            },

            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: 10,
                  }}>
                  <Image
                    source={Images.WORK}
                    style={{width: 30, height: 30}}
                    tintColor={focused ? Colors.primary : Colors.white}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={Routes.Meal_Plan}
          component={MealScreen}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                  }}>
                  <Text
                    style={{
                      color: focused ? Colors.primary : Colors.white,
                      paddingBottom: 7,

                      fontSize: 10,
                    }}>
                    Meal Plan
                  </Text>
                </View>
              );
            },

            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: 10,
                  }}>
                  <Image
                    source={Images.DIET}
                    style={{width: 20, height: 20}}
                    tintColor={focused ? Colors.primary : Colors.white}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={Routes.Sound}
          component={Sound}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                  }}>
                  <Text
                    style={{
                      color: focused ? Colors.primary : Colors.white,
                      paddingBottom: 7,
                      fontSize: 10,
                    }}>
                    Sound
                  </Text>
                </View>
              );
            },

            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: 10,
                  }}>
                  <Image
                    source={Images.VOLUME}
                    style={{width: 20, height: 20}}
                    tintColor={focused ? Colors.primary : Colors.white}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
});
