import React from 'react';
import {Pressable, ActivityIndicator, StyleSheet, Text} from 'react-native';
import Label from '../Label';
import {styles} from './ButtonStyle';
import {Colors} from '../../assets';

const Button = ({
  style,
  children,
  disabled,
  onPress,
  labelStyle,
  loading,
  fontSize,
  color,
}) => {
  return (
    <Button
      onPress={onPress}
      //   disabled={loading || disabled}
      style={[
        styles.main,
        {
          flexDirection: 'row',
          backgroundColor: Colors.primary,
          //   width: '90%',
          ...style,
        },
      ]}>
      {/* {loading ? (
        <ActivityIndicator
          style={{marginLeft: 5}}
          size="small"
          color="#F0F0F0"
        />
      ) : ( */}
      <Text style={[labelStyle, styles.label, {color, fontSize}]}>
        {children}
      </Text>
      {/* )} */}
    </Button>
  );
};
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    paddingVertical: 13,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  label: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
});

export default Button;
