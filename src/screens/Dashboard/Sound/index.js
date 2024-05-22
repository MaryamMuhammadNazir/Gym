import {StyleSheet, Platform, View, ScrollView} from 'react-native';
import React from 'react';
import CustomizeHeader from '../../../components/CustomizeHeader';
import {Colors} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize';
import CustomHeading from '../../../components/CustomHeading';

const Sound = () => {
  return (
    <View
      style={{
        paddingTop: Platform.OS === 'ios' ? HP(5) : 0,
        backgroundColor: Colors.tabbgclr,
        flex: 1,
      }}>
      <CustomizeHeader isVisible={true} />
      <View style={styles.contentContainerStyle}>
        <CustomHeading
          mainText="Sound it"
          subText="Keep it fun with sounds of your device"
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}></ScrollView>
    </View>
  );
};

export default Sound;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(3),
  },
});
