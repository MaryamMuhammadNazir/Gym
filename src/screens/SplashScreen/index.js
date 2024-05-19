import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/Routes';
import Animations from '../../assets/animations/Animations';
useNavigation;
const Splash = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.replce(Routes.BOTTOM_TAB);
  }, 5000);

  return (
    <View style={styles.mainView}>
      <LottieView
        source={Animations.SPLASH_ANIMATION}
        autoPlay={false}
        resizeMode="cover"
        onAnimationFinish={navigation.replce(Routes.BOTTOM_TAB)}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    margin: 0,
  },
});
