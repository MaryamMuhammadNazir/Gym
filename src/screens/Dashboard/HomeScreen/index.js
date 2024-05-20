import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../redux/Reducers/AuthReducer';
import CustomizeHeader from '../../../components/CustomizeHeader';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const loginUser = () => {
    dispatch(setUser(null));
  };
  return (
    <SafeAreaView>
      <CustomizeHeader isVisible={true} />
    </SafeAreaView>
  );
};

export {HomeScreen};
