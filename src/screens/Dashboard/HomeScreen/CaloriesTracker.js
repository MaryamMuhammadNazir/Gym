import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { Colors, Images } from '../../../assets';
import { HP, WP } from '../../../utility/ResponsiveSize';
// import {Svg, Circle} from 'react-native-svg';
// import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const CaloriesTracker = () => {
  const [fillValue] = useState(new Animated.Value(10));
  const circularProgressRef = useRef(null);

  useEffect(() => {
    if (circularProgressRef.current) {
      circularProgressRef.current.animate(30, 1000); // animate to 30% in 1 second
    }
    Animated.timing(fillValue, {
      toValue: 0, // animate to 30% fill value
      duration: 1000, // in 1 second
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.containerbar, { marginBottom: HP(3) }]}>
        <Text style={styles.title}>Calories Tracker</Text>
        <AnimatedCircularProgress
          ref={circularProgressRef}
          size={170}
          width={25}
          fill={0}
          lineCap="round"
          style={{ transform: [{ rotate: '180deg' }] }}
          arcSweepAngle={180}
          tintColor={Colors.primary}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="rgb(99,88,85)"
          padding={0}
          dashedBackground={{ width: 5, gap: 5 }}
          dashedTint={{ width: 5, gap: 5 }}
          duration={1000}
          children={fill => (
            <>
              <Animated.View
                style={[
                  styles.fillContainer,
                  {
                    transform: [
                      { rotate: '180deg' },
                      {
                        translateY: fillValue.interpolate({
                          inputRange: [0, 100],
                          outputRange: [0, -200],
                        }),
                      },
                    ],
                  },
                ]}>
                <Image
                  source={Images.NEEDLE}
                  tintColor={Colors.white}
                  style={styles.needle}
                />
                {/* <Text style={styles.fillText}>{`${Math.round(fill)}%`}</Text> */}
              </Animated.View>
            </>
          )}
          childrenContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderCap={({ center }) => <></>}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.caloriesText}>1023 Calories</Text>
          <Text style={styles.weekText}>This week</Text>
        </View>
      </View>
    </View>
  );
};

export default CaloriesTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.cardclr,
    borderRadius: WP(5),
    // height: HP(30),
  },
  title: {
    color: Colors.white,
    fontSize: 20,
    alignSelf: 'flex-start',
    padding: HP(1),
  },
  fillContainer: {
    alignItems: 'center',
  },
  needle: {
    width: 30,
    height: 200,
    resizeMode: 'cover',
    transform: [
      { rotate: '-25deg' },]
  },
  fillText: {
    fontSize: 18,
    color: 'white',
  },
  infoContainer: {
    top: HP(-5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  caloriesText: {
    color: Colors.white,
    fontSize: 30,
  },
  weekText: {
    color: Colors.white,
    fontSize: 20,
  },
});
