import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../redux/Reducers/AuthReducer';
import CustomizeHeader from '../../../components/CustomizeHeader';
import GraphBar from '../../../components/GraphBar';
import CustomHeading from '../../../components/CustomHeading';
import {Colors, Images} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize'; // Import WP and HP

import Moment from 'moment'; // Import Moment

const HomeScreen = () => {
  const dispatch = useDispatch();
  const loginUser = () => {
    dispatch(setUser(null));
  };

  // Get today's date using Moment
  // const todayDate = Moment().format('MMM D, YYYY');
  const todayDate = Moment().format('dddd, MMM Do');
  return (
    <View
      style={{
        paddingTop: Platform.OS === 'ios' ? HP(5) : 0,
        backgroundColor: Colors.tabbgclr,
        flex: 1,
      }}>
      <CustomizeHeader isVisible={false} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <CustomHeading
          mainText="Your weekly stack"
          subText="This week books good, loop pushing yami💪"
        />
        {/* card */}
        <View style={styles.container}>
          {/* Display today's date */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // marginHorizontal: WP(2),
              marginBottom: WP(3),
            }}>
            <Text style={styles.dateText}>{todayDate}</Text>
            <View style={styles.weekContainer}>
              <Text style={[styles.dateText, {padding: WP(1)}]}>week 34</Text>
              <Image
                source={Images.DOWN}
                style={styles.downArrow}
                tintColor={Colors.white}
              />
            </View>
          </View>
          {/* Render GraphBars */}
          <View style={styles.barConatianer}>
            <GraphBar value={75} color="tomato" day="MOn" />
            <GraphBar value={50} color="blue" day="MOn" />
            <GraphBar value={25} color="green" day="MOn" />
            <GraphBar value={50} color="purple" day="MOn" />
            <GraphBar value={30} color="purple" day="MOn" />
            <GraphBar value={20} color="purple" day="MOn" />
            <GraphBar value={10} color="purple" day="MOn" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: 'space-around',
    padding: WP(5),
    // alignItems: 'center',
    backgroundColor: 'grey',
    opacity: 0.7,
    paddingHorizontal: WP(3),
    borderRadius: WP(5),
  },
  contentContainerStyle: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(3),
  },
  dateText: {
    fontSize: WP(3), // Example usage of WP for font size
    alignContent: 'center',
    color: Colors.white,
    justifyContent: 'flex-start',
  },
  barConatianer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  weekContainer: {
    borderRadius: WP(5),
    backgroundColor: Colors.tabbgclr,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: HP(1),
    alignItems: 'center',
  },
  downArrow: {
    height: 7,
    width: 10,
    resizeMode: 'cover',
  },
});
export {HomeScreen};
