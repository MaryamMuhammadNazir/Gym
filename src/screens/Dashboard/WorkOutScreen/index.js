import {StyleSheet, Platform, View, ScrollView} from 'react-native';
import React from 'react';
import CustomizeHeader from '../../../components/CustomizeHeader';
import {Colors} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize';
import CustomHeading from '../../../components/CustomHeading';

const Workout = () => {
  return (
    <View
      style={{
        paddingTop: Platform.OS === 'ios' ? HP(5) : 0,
        backgroundColor: Colors.tabbgclr,
        flex: 1,
      }}>
      <CustomizeHeader isVisible={false} />
      <View style={styles.contentContainerStyle}>
        <CustomHeading
          mainText="Work outs"
          subText="We have videos curated for you"
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}></ScrollView>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(3),
  },
});
