import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing, StatusBar } from 'react-native';
import { Colors } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../navigation/Routes';
import { HP, WP } from '../../utility/ResponsiveSize';

const SpreadColorScreen = () => {
  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    StatusBar.setHidden(true);

    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        navigation.replace(Routes.BOTTOM_TAB);
      }, 500);
    });

    return () => {
      StatusBar.setHidden(false);
    };
  }, [animation, navigation]);

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.tabbgclr, Colors.primary],
  });

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.01, 200],  // Adjusted to a large enough value to cover the screen
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            backgroundColor,
            transform: [{ scale }],
          },
        ]}
      />
    </View>
  );
};

export default SpreadColorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.tabbgclr,
  },
  animatedView: {
    width: WP(20), // Set width as 20% of the screen width
    height: WP(20), // Set height as 20% of the screen width for a square
    borderRadius: WP(10), // Set borderRadius to half of width/height for a perfect circle
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -WP(10), // Offset by half the width to center
    marginTop: -WP(10), // Offset by half the height to center
  },
});
