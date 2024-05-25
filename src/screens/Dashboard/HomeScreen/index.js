import {View, Text, ScrollView, Platform, Image} from 'react-native';
import React, {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../redux/Reducers/AuthReducer';
import CustomizeHeader from '../../../components/CustomizeHeader';
import GraphBar from '../../../components/GraphBar';
import CustomHeading from '../../../components/CustomHeading';
import {Colors, Images} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize'; // Import WP and HP
import LinearGradient from 'react-native-linear-gradient';
import Moment from 'moment'; // Import Moment
import styles from './styles';
import Button from '../../../components/CustomButton';
import BottomSheet from '@gorhom/bottom-sheet';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const loginUser = () => {
    dispatch(setUser(null));
  };
  const snapPoints = useMemo(() => ['80%'], []);
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
            <GraphBar value={75} day="MOn" />
            <GraphBar value={50} day="Tue" />
            <GraphBar value={25} day="Wed" />
            <GraphBar value={50} day="Thr" />
            <GraphBar value={30} day="Fri" />
            <GraphBar value={20} day="Sat" />
            <GraphBar value={10} day="MOn" />
          </View>
        </View>
        <View style={{marginVertical: HP(3)}}>
          <Text style={styles.routineText}>Today's routine</Text>
          <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseText}>7 exercises, 3 sets, 8 reps</Text>
            <Button
              buttonTitle={"Let's go"}
              onPress={() => {
                onpressbtn();
              }}
            />
          </View>
        </View>

        <BottomSheet snapPoints={snapPoints}></BottomSheet>
      </ScrollView>
    </View>
  );
};

export {HomeScreen};
