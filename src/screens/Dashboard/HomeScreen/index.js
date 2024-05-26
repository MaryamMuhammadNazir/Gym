import {View, Text, ScrollView, Platform, Image} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../redux/Reducers/AuthReducer';
import CustomizeHeader from '../../../components/CustomizeHeader';
import GraphBar from '../../../components/GraphBar';
import CustomHeading from '../../../components/CustomHeading';
import {Colors, Images} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize'; // Import WP and HP
import Moment from 'moment'; // Import Moment
import styles from './styles';
import Button from '../../../components/CustomButton';
import CustomBottomSheet from '../../../components/CustomBottomSheet';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isImageSlideOpen, setImageSliderOpen] = useState(true);
  useEffect(() => {
    setImageSliderOpen(true);
    console.log('=================>');
  }, [isBottomSheetOpen]);

  const bottomsheetRef = useRef(null);

  const loginUser = () => {
    dispatch(setUser(null));
  };
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ['80%'], []);

  const handleOpenBottomSheet = () => {
    if (bottomsheetRef.current) {
      bottomsheetRef.current.expand();
      setIsBottomSheetOpen(true);
      navigation.setOptions({tabBarVisible: false});
    }
  };

  const handleCloseBottomSheet = () => {
    if (bottomsheetRef.current) {
      if (isImageSlideOpen) {
        setImageSliderOpen(false);
        console.log('close image slider');
      } else {
        bottomsheetRef.current.close();
        setIsBottomSheetOpen(false);
        navigation.setOptions({tabBarVisible: true});
        console.log('close Bottom');
      }
    }
  };

  const handlePressEndSession = () => {
    handleCloseBottomSheet();
  };

  const onPressBtn = () => {
    setIsBottomSheetOpen(true);
    if (isBottomSheetOpen) {
      handleCloseBottomSheet();
    } else {
      handleOpenBottomSheet();
    }
    console.log('Button pressed');
  };

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
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
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
          <View style={styles.barConatianer}>
            <GraphBar value={75} day="Mon" />
            <GraphBar value={50} day="Tue" />
            <GraphBar value={25} day="Wed" />
            <GraphBar value={50} day="Thu" />
            <GraphBar value={30} day="Fri" />
            <GraphBar value={20} day="Sat" />
            <GraphBar value={10} day="Sun" />
          </View>
        </View>
        <View style={{marginVertical: HP(3)}}>
          <Text style={styles.routineText}>Today's routine</Text>
          <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseText}>7 exercises, 3 sets, 8 reps</Text>
            <Button buttonTitle={"Let's go"} onPress={onPressBtn} />
          </View>
        </View>

        {isBottomSheetOpen && (
          <CustomBottomSheet
            ref={bottomsheetRef}
            snapPoints={snapPoints}
            handlePressEndSession={handlePressEndSession}
            isImageSlideOpen={isImageSlideOpen}
            setImageSliderOpen={setImageSliderOpen}
          />
        )}
      </ScrollView>
    </View>
  );
};

export {HomeScreen};
