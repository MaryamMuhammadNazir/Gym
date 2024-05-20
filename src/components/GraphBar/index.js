import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {Colors} from '../../assets';

const GraphBar = ({value, maxValue, color}) => {
  const filledHeight = `${(value / maxValue) * 100}%`;

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.bar,
          {height: filledHeight, backgroundColor: Colors.primary},
        ]}></View>
    </View>
  );
};

export default GraphBar;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 200,
    overflow: 'hidden',
    borderRadius: 30,
    justifyContent: 'flex-end',
    backgroundColor: Colors.tabbgclr, // Set transparent background color
  },
  bar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 30,
  },
});
