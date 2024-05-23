import {StyleSheet, Platform, View, ScrollView} from 'react-native';
import React from 'react';
import CustomizeHeader from '../../../components/CustomizeHeader';
import {Colors} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize';
import Wrapper from '../../../components/Wrapper';

const MealScreen = () => {
  return (
    <Wrapper isVisible={false}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}></ScrollView>
    </Wrapper>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(3),
  },
});
