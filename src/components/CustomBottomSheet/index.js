import React, {forwardRef} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {HP, WP} from '../../utility/ResponsiveSize';
import {Colors, Images} from '../../assets';
import {ProgressView} from '@react-native-community/progress-view';
import {ImageSlider} from 'react-native-image-slider-banner'; // Uncomment if needed
//
const CustomBottomSheet = forwardRef(
  (
    {snapPoints, handlePressEndSession, isImageSlideOpen, setImageSliderOpen},
    ref,
  ) => {
    const imagesURL = [
      {img: require('../../assets/images/slidrImage.png')},
      {img: require('../../assets/images/img.png')},
      {img: require('../../assets/images/img.png')},
    ];
    const progress = 0.7;
    return (
      <BottomSheet ref={ref} snapPoints={snapPoints}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            backgroundColor: Colors.white,
          }}>
          {isImageSlideOpen === true ? (
            <>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    marginVertical: HP(2),
                    fontSize: HP(3),
                    color: Colors.black,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  Today's routine for you
                </Text>
                <Text>7 exercises, 3 sets, 8 reps</Text>
              </View>
              {/* use here progress bar */}
              {/* <ProgressView
                style={{width: '80%', height: 20, marginVertical: HP(2)}}
                progressTintColor={Colors.primary}
                trackTintColor={Colors.grey}
                progress={progress}
              /> */}
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ImageSlider
                  data={imagesURL}
                  localImg
                  autoPlay={false}
                  caroselImageContainerStyle={styles.caroselImageContainer}
                  caroselImageStyle={styles.caroselImage}
                  indicatorContainerStyle={styles.indicatorContainer}
                  inActiveIndicatorStyle={styles.inActiveIndicator}
                  closeIconColor="#fff"
                  activeIndicatorStyle={styles.ActiveIndicator}
                  preview={false}
                  showIndicator={true}
                />
                <Text>Swipe when done to view next</Text>
              </View>
            </>
          ) : (
            <>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    marginVertical: HP(3),
                    fontSize: HP(3),
                    color: Colors.black,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  You're on a roll!
                </Text>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      width: '70%',
                      alignSelf: 'center',
                      fontSize: HP(1.5),
                      textAlign: 'center',
                    }}>
                    You have almost beat yesterday's record,
                    <Text>{'\n'}</Text>
                    complete your routine to set a new record{' '}
                    <Text>{'\n'}</Text>for the week.
                  </Text>
                </View>
              </View>
              <View>
                <Image
                  source={Images.YOGAGIRL}
                  style={{height: 200, width: 200, resizeMode: 'contain'}}
                />
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.tabbgclr,
                  alignContent: 'center',
                  justifyContent: 'center',
                  borderRadius: HP(2),
                }}
                onPress={() => {
                  setImageSliderOpen(true);
                }}>
                <Text
                  style={{
                    color: Colors.primary,
                    fontWeight: 'bold',
                    padding: HP(2),
                    marginHorizontal: WP(3),
                  }}>
                  Continue session
                </Text>
              </TouchableOpacity>
            </>
          )}

          <View
            style={{
              marginBottom: HP(9),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <TouchableOpacity onPress={handlePressEndSession}>
                <Text
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    padding: HP(2),
                    alignSelf: 'center',
                  }}>
                  End session
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BottomSheet>
    );
  },
);

export default CustomBottomSheet;

const styles = StyleSheet.create({
  caroselImageContainer: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
  caroselImage: {
    resizeMode: 'cover',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderRadius: HP(4),
  },
  indicatorContainer: {
    position: 'absolute',
    top: 10,
  },
  inActiveIndicator: {
    width: 10,
    height: 5,
  },
  ActiveIndicator: {
    width: 40,
    height: 5,
    backgroundColor: Colors.cardclr,
  },
});
