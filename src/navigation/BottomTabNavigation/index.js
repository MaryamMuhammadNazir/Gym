import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View, StatusBar, StyleSheet, Platform} from 'react-native';
import Routes from '../Routes';
import {Colors, Images} from '../../assets';
import Workout from '../../screens/Dashboard/WorkOutScreen';
import MealScreen from '../../screens/Dashboard/Mealscreen';
import SoundCustom from '../../screens/Dashboard/Sound';
import {HomeStack} from '../Stacks';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
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
      height: Platform.OS === 'android' ? 50 : 80,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.tabbgclr,
      borderTopWidth: 0,
    },
  };

  return (
    <View style={styles.MainView}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.tabbgclr} />
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name={Routes.HOME_SCREEN}
          component={HomeStack}
          options={{
            tabBarLabel: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    color: focused ? Colors.primary : Colors.white,
                    fontSize: 10,
                  }}>
                  Home
                </Text>
              </View>
            ),
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={Images.HOME_ICON}
                  style={{width: 20, height: 20}}
                  tintColor={focused ? Colors.primary : Colors.white}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={Routes.Work_Out}
          component={Workout}
          options={{
            tabBarLabel: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    color: focused ? Colors.primary : Colors.white,
                    fontSize: 10,
                  }}>
                  Work out
                </Text>
              </View>
            ),
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={Images.WORK}
                  style={{width: 30, height: 30}}
                  tintColor={focused ? Colors.primary : Colors.white}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={Routes.Meal_Plan}
          component={MealScreen}
          options={{
            tabBarLabel: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    color: focused ? Colors.primary : Colors.white,
                    fontSize: 10,
                  }}>
                  Meal Plan
                </Text>
              </View>
            ),
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={Images.DIET}
                  style={{width: 20, height: 20}}
                  tintColor={focused ? Colors.primary : Colors.white}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={Routes.SOUND}
          component={SoundCustom}
          options={{
            tabBarLabel: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    color: focused ? Colors.primary : Colors.white,
                    fontSize: 10,
                  }}>
                  Sound
                </Text>
              </View>
            ),
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={Images.VOLUME}
                  style={{width: 20, height: 20}}
                  tintColor={focused ? Colors.primary : Colors.white}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
});
