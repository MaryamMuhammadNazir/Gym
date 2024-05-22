import {StyleSheet, Platform, View, ScrollView} from 'react-native';
import React from 'react';
import CustomizeHeader from '../../../components/CustomizeHeader';
import {Colors} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize';

const MealScreen = () => {
  return (
    <View
      style={{
        paddingTop: Platform.OS === 'ios' ? HP(5) : 0,
        backgroundColor: Colors.tabbgclr,
        flex: 1,
      }}>
      <CustomizeHeader isVisible={false} />
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}></ScrollView>
    </View>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(3),
  },
});
