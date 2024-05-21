import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../navigation/Routes';
import Animations from '../../assets/animations/Animations';
useNavigation;
const Splash = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.replace(Routes.BOTTOM_TAB);
  }, 5000);

  return (
    <View style={styles.mainView}>
      <LottieView
        source={Animations.SPLASH_ANIMATION}
        autoPlay={false}
        resizeMode="cover"
        style={{ flex: 1, height: 200, width: 200, resizeMode: "cover", justifyContent: "center", alignItems: "center" }}
        onAnimationFinish={navigation.navigate(Routes.BOTTOM_TAB)}
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
