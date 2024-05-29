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

const GraphBar = ({value, day, colorrr}) => {
  const barHeight = useSharedValue(0);
  const barHeight2 = useSharedValue(0);
  const maxValue = 100;
  useEffect(() => {
    barHeight.value = withTiming(value / maxValue, {
      duration: 1000,
    });
    barHeight2.value = withTiming(value / maxValue, {
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
  const animatedStyle2 = useAnimatedStyle(() => {
    const height = interpolate(barHeight.value, [0, 1], [0, 200]);
    return {
      height,
    };
  });

  return (
    <View style={styles.maincontainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.container}>
          {/* Animated bar */}
          <Animated.View style={[styles.bar, animatedStyle]} />
        </View>
        <View style={styles.container2}>
          {/* Animated bar */}
          <Animated.View style={[styles.bar2, animatedStyle2]}>
            <Text style={{color: Colors.white, fontSize: 12}}>
              {`+` + value}
            </Text>
          </Animated.View>
        </View>
      </View>
      <Image source={Images.SECURE} style={styles.img} tintColor={colorrr} />
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  container: {
    width: WP(2),
    height: HP(22),
    overflow: 'hidden',
    borderRadius: 30,
    justifyContent: 'flex-end',
    backgroundColor: Colors.tabbgclr,
  },
  container2: {
    overflow: 'hidden',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    alignItems: 'center',
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
  bar2: {
    width: '100%',
    borderRadius: 30,
  },
});
