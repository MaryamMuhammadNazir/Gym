import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../redux/Reducers/AuthReducer';
import {CustomizedInput} from '../../../components';
import styles from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const loginUser = () => {
    dispatch(
      setUser({
        name: 'Hamza',
      }),
    );
  };
  return (
    <SafeAreaView style={styles.root}>
      <CustomizedInput type="text" />
      <TouchableOpacity onPress={loginUser}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export {LoginScreen};
