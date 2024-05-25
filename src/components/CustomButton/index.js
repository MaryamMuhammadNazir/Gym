import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from '../../assets';
import {HP, WP} from '../../utility/ResponsiveSize';

const Button = ({onPress, buttonTitle}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: HP(1), // Example: 2% of screen height
    paddingHorizontal: WP(5), // Example: 5% of screen width
    borderRadius: WP(2), // Example: 2% of screen width for border radius
    alignItems: 'center',
    justifyContent: 'center',
    margin: WP(2.5), // Example: 2.5% of screen width for margin
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: WP(4), // Example: 4% of screen width for font size
    fontWeight: 'bold',
  },
});
