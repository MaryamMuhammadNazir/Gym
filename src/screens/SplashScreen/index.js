import {StyleSheet, StatusBar, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/Routes';
import Animations from '../../assets/animations/Animations';
import {Colors} from '../../assets';
import {WP, HP} from '../../utility/ResponsiveSize';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setHidden(true);

    // Navigate to SPREADCLR after 3 seconds
    setTimeout(() => {
      navigation.replace(Routes.SPREADCLR);
    }, 2000);

    return () => {
      StatusBar.setHidden(false);
    };
  }, [navigation]);

  return (
    <View style={styles.mainView}>
      <LottieView
        source={Animations.SPLASH_ANIMATION}
        autoPlay={true}
        resizeMode="cover"
        style={styles.lottieView}
      />
      <Text style={[styles.text, {marginTop: HP(5)}]}>
        Look in mirror, that's your competition
      </Text>
      <Text style={styles.text}>-john Assaraf</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    backgroundColor: Colors.tabbgclr,
  },
  lottieView: {
    width: WP(30), // Adjust the width to 50% of the screen width
    height: HP(15), // Adjust the height to 30% of the screen height
    resizeMode: 'cover',
  },
  text: {
    // Adjust the margin top to 3% of the screen height
    fontSize: WP(4), // Adjust the font size to 4% of the screen width
    color: Colors.white,
    textAlign: 'center',
  },
});
