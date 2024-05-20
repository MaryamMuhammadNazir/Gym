import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../redux/Reducers/AuthReducer';
import CustomizeHeader from '../../../components/CustomizeHeader';
import GraphBar from '../../../components/GraphBar';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const loginUser = () => {
    dispatch(setUser(null));
  };
  return (
    <SafeAreaView>
      <CustomizeHeader isVisible={true} />
      <ScrollView contentContainerStyle={styles.container}>
        <GraphBar value={75} maxValue={100} color="tomato" />
        <GraphBar value={50} maxValue={100} color="blue" />
        <GraphBar value={25} maxValue={100} color="green" />
        <GraphBar value={90} maxValue={100} color="purple" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
});
export {HomeScreen};
