import {StyleSheet, Platform, View, ScrollView} from 'react-native';
import React from 'react';
import CustomizeHeader from '../../../components/CustomizeHeader';
import {Colors} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize';
import CustomHeading from '../../../components/CustomHeading';
import Wrapper from '../../../components/Wrapper';

const Workout = () => {
  return (
    <Wrapper isVisible={true}>
      <View style={styles.contentContainerStyle}>
        <CustomHeading
          mainText="Work outs"
          subText="We have videos curated for you"
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}></ScrollView>
    </Wrapper>
  );
};

export default Workout;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(3),
  },
});
