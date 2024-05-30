import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WP, HP } from '../../utility/ResponsiveSize';
import { Colors } from '../../assets';

const CustomHeading = ({ mainText, subText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>{mainText}</Text>
      <Text style={styles.subHeading}>{subText}</Text>
    </View>
  );
};

export default CustomHeading;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
  },
  mainHeading: {
    fontSize: WP(8), // Adjust the font size as needed
    // fontWeight: 'bold',
    marginBottom: HP(0), // Adjust the margin as needed
    color: Colors.white,
    fontFamily: "SFProText-Bold",
  },
  subHeading: {
    fontSize: WP(4), // Adjust the font size as needed
    color: Colors.white,
    marginBottom: HP(2), // Adjust the margin as needed
  },
});
