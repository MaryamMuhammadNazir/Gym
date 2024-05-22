import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import {Colors, Images} from '../../assets';
import {HP, WP} from '../../utility/ResponsiveSize';

const GraphBar = ({value, day}) => {
  const barHeight = useSharedValue(0);
  const maxValue = 100;
  useEffect(() => {
    barHeight.value = withTiming(value / maxValue, {
      duration: 1000,
    });
  }, [value, maxValue]);

  const animatedStyle = useAnimatedStyle(() => {
    const height = interpolate(barHeight.value, [0, 1], [0, 200]);
    return {
      height,
      backgroundColor: Colors.primary,
    };
  });

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        {/* Animated bar */}
        <Animated.View style={[styles.bar, animatedStyle]} />
      </View>
      <Image
        source={Images.SECURE}
        style={styles.img}
        tintColor={Colors.primary}
      />
      <Text style={{color: Colors.white}}>{day}</Text>
    </View>
  );
};

GraphBar.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  day: PropTypes.string.isRequired,
};

export default GraphBar;

const styles = StyleSheet.create({
  maincontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: WP(2),
    height: HP(22),
    overflow: 'hidden',
    borderRadius: 30,
    justifyContent: 'flex-end',
    backgroundColor: Colors.tabbgclr,
  },
  img: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
    marginVertical: WP(2),
  },
  bar: {
    width: '100%',
    borderRadius: 30,
  },
});
