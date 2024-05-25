import {View, Text, ScrollView, Platform, Image} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../redux/Reducers/AuthReducer';
import CustomizeHeader from '../../../components/CustomizeHeader';
import GraphBar from '../../../components/GraphBar';
import CustomHeading from '../../../components/CustomHeading';
import {Colors, HalfCircleCalorieTracker, Images} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize'; // Import WP and HP
import LinearGradient from 'react-native-linear-gradient';
import Moment from 'moment'; // Import Moment
import styles from './styles';
import Button from '../../../components/CustomButton';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const loginUser = () => {
    dispatch(setUser(null));
  };

  const onpressbtn = () => {
    console.log('btn preesses');
  };
  // Get today's date using Moment
  // const todayDate = Moment().format('MMMD, YYYY');
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
        <View style={{marginVertical: HP(3)}}>
          <Text
            style={{
              color: Colors.white,
              fontSize: HP(2.5),
            }}>
            Today's routine
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Colors.cardclr,
              flexWrap: 'wrap',
              borderRadius: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: HP(1.75),
                color: Colors.white,
                marginHorizontal: HP(2),
              }}>
              7 exercises, 3 sets, 8 reps
            </Text>
            <Button
              buttonTitle={"Let's go"}
              onPress={() => {
                onpressbtn();
              }}
            />
          </View>
        </View>
        {/*half circle */}
        <View style={styles.speedometerContainer}></View>
      </ScrollView>
    </View>
  );
};

export {HomeScreen};
