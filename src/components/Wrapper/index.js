import {StyleSheet, Platform, View} from 'react-native';
import React from 'react';
import {Colors} from '../../assets';
import {HP} from '../../utility/ResponsiveSize';
import CustomizeHeader from '../CustomizeHeader';

const Wrapper = ({chilldern, isVisible}) => {
  return (
    <View style={styles.container}>
      <CustomizeHeader isVisible={isVisible} />
      {chilldern}
    </View>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? HP(5) : 0,
    backgroundColor: Colors.tabbgclr,
    flex: 1,
  },
});
