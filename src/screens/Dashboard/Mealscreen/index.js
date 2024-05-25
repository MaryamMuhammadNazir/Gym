import {StyleSheet, Platform, View, ScrollView} from 'react-native';
import React from 'react';
import CustomizeHeader from '../../../components/CustomizeHeader';
import {Colors} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize';
import CustomHeading from '../../../components/CustomHeading';

const MealScreen = () => {
  return (
    <View
      style={[
        styles.container,
        {paddingTop: Platform.OS === 'ios' ? HP(5) : 0},
      ]}>
      <CustomizeHeader isVisible={false} />
      <View style={styles.contentContainer}>
        <CustomHeading
          mainText="We are still building"
          subText="We have videos curated for you"
        />
      </View>
    </View>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tabbgclr,
    flex: 1,
  },
  contentContainer: {
    padding: WP(5),
    paddingHorizontal: WP(3),
    borderRadius: WP(5),
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
