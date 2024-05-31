import React, { forwardRef, useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Easing,
  Dimensions,
  ImageBackground,
  Animated,
} from 'react-native';
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';
import { HP, WP } from '../../utility/ResponsiveSize';
import { Colors, Images } from '../../assets';
import * as Progress from 'react-native-progress';
import Carousel from 'react-native-reanimated-carousel'; // Import the Carousel component
import { useIsFocused } from '@react-navigation/native';
import Animated, { FadeIn, FadeInDown, FadeInRight, FadeInUp, FadeOut } from 'react-native-reanimated';
const CustomBottomSheet = forwardRef(

  (
    { snapPoints, handlePressEndSession, isImageSlideOpen, setImageSliderOpen },
    ref,
  ) => {
    const [progress, setProgress] = useState(0.1);
    const width = Dimensions.get('window').width;
    const isFocus = useIsFocused()
    const [images, setImages] = React.useState([
      {
        id: 0,
        url: 'https://picsum.photos/id/1/200/300',
        time: '9:24:00',
        text: 'Warm up',
        subTxt: '10 miutes',
      },
      {
        id: 1,
        url: 'https://picsum.photos/id/2/200/300',
        time: '9:24:00',
        text: 'Warm up',
        subTxt: '10 miutes',
      },
      {
        id: 2,
        url: 'https://picsum.photos/id/2/200/300',
        time: '9:24:00',
        text: 'Warm up',
        subTxt: '10 miutes',
      },
      {
        id: 3,
        url: 'https://picsum.photos/id/3/200/300',
        time: '6:24:00',
        text: 'Jump squats',
        subTxt: '3 sets , 4 reps each',
      },
      {
        id: 4,
        url: 'https://picsum.photos/id/4/200/300',
        time: '1:24:00',
        text: 'Warm up',
        subTxt: '3 sets , 4 reps each',
      },
      {
        id: 5,
        url: 'https://picsum.photos/id/5/200/300',
        time: '4:24:00',
        text: 'Warm up',
        subTxt: '10 miutes',
      },
    ]);
    const [snapDirection, setSnapDirection] = useState('left');
    const [mode, setMode] = useState('horizontal-stack');

    return (
      <BottomSheetModal
        enablePanDownToClose={true}
        enableOverDrag={false}
        ref={ref}
        snapPoints={snapPoints}
        index={0}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            backgroundColor: Colors.white,
          }}>
          {isImageSlideOpen === true ? (
            // Animated image slider view
            <Animated.View
              style={[
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: [
                    { translateX: slideAnim.x },
                    { translateY: slideAnim.y },
                    { scale: scaleAnim },
                  ],
                },
              ]}>
              {/* top view */}
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text
                  style={{
                    marginVertical: HP(1),
                    fontSize: HP(3),
                    color: Colors.black,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  Today's routine for you
                </Text>
                <Text
                  style={{
                    fontSize: HP(1.5),
                    color: Colors.black,
                    fontWeight: '700',
                    alignSelf: 'center',
                  }}>
                  7 exercises, 3 sets, 8 reps
                </Text>
              </View>

              <View style={{ flex: 0.87 }}>
                <View style={{ marginTop: HP(3) }}>
                  <Progress.Bar
                    progress={progress}
                    width={300}
                    unfilledColor={Colors.tabbgclr}
                    borderWidth={0}
                    color={Colors.primary}
                    height={15}
                    borderRadius={20}
                    fillBorderRadius={10}
                    useNativeDriver={true}
                  />
                </View>
                <View style={{}}>
                  {/* Use the Carousel component here */}
                  <Carousel
                    width={300}
                    height={365}
                    // loop
                    autoPlay={false}
                    borderRadius={20}
                    style={{}}
                    pagingEnabled={true}
                    snapEnabled={true}
                    mode={'vertical-stack'}
                    modeConfig={{
                      snapDirection,
                    }}
                    scrollAnimationDuration={1000}
                    onSnapToItem={index => {
                      // setCurrentIndex(index); // Update the current index state
                      const newProgress = (index + 1) / images.length; // Calculate the new progress
                      setProgress(newProgress); // Update the progress state
                    }}
                    data={images}
                    renderItem={({ item }) => (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                        }}>
                        <ImageBackground
                          source={{ uri: item.url }}
                          borderRadius={20}
                          style={{
                            width: 300,
                            height: 300,
                            resizeMode: 'cover',
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <ImageBackground
                            source={Images.CIRCLE}
                            style={{
                              height: 70,
                              width: 70,
                              resizeMode: 'cover',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                            tintColor={Colors.primary}>
                            <Image
                              source={Images.PLAYFILLED}
                              tintColor={Colors.white}
                              style={{
                                height: 40,
                                width: 40,
                                resizeMode: 'cover',
                              }}
                            />
                          </ImageBackground>
                          <View
                            style={{
                              width: '90%',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              flexDirection: 'row',
                              position: 'absolute',
                              bottom: 10,
                            }}>
                            <View>
                              <Text
                                style={{
                                  fontSize: 16,
                                  color: Colors.white,
                                  paddingHorizontal: 15,
                                  paddingVertical: 2,
                                }}>
                                {item?.text}
                              </Text>

                              <Text
                                style={{
                                  fontSize: 16,
                                  color: Colors.white,
                                  paddingHorizontal: 15,
                                  paddingVertical: 2,
                                }}>
                                {item?.subTxt}
                              </Text>
                            </View>
                            <View
                              style={{
                                backgroundColor: 'rgb(248,248,248)',
                                borderRadius: 15,
                              }}>
                              <Text
                                style={{
                                  fontSize: 16,
                                  color: Colors.tabbgclr,
                                  paddingHorizontal: 15,
                                  paddingVertical: 5,
                                }}>
                                {item.time}
                              </Text>
                            </View>
                          </View>
                        </ImageBackground>
                      </View>
                    )}
                  />
                </View>
              </View>
              <Text style={{ color: Colors.tabbgclr, fontSize: HP(1.7) }}>
                Swipe when done to view next
              </Text>
            </Animated.View>
          ) : (
            // apply different animation
            <Animated.View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text
                  style={{
                    marginVertical: HP(2.5),
                    fontSize: HP(3),
                    color: 'black',
                    fontFamily: 'SFProText-Bold',
                    alignSelf: 'center',
                  }}>
                  You're on a roll!
                </Text>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Animated.Text
                    style={{
                      width: '70%',
                      alignSelf: 'center',
                      fontSize: HP(1.3),
                      textAlign: 'center',
                      fontFamily: 'SFProText-Regular',
                    }}>
                    You have almost beat yesterday's record,
                    <Text>{'\n'}</Text>
                    complete your routine to set a new record{' '}
                    <Text>{'\n'}</Text>for the week.
                  </Animated.Text>
                </View>
              </View>
              <View>
                <Image
                  source={Images.YOGAGIRL}
                  style={{ height: 200, width: 200, resizeMode: 'contain' }}
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
                    fontFamily: 'SFProText-Bold',
                    padding: HP(2),
                    marginHorizontal: WP(3),
                  }}>
                  Continue session
                </Text>
              </TouchableOpacity>
            </Animated.View>
          )}

          <View
            style={{
              marginBottom: isImageSlideOpen ? HP(1) : HP(2.5),
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}>
            <TouchableOpacity onPress={handlePressEndSession}>
              <Text
                style={{
                  color: 'red',
                  padding: HP(2),
                  alignSelf: 'center',
                  fontFamily: 'SFProText-Bold',
                }}>
                End session
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheetModal>
    );
  },
);

export default CustomBottomSheet;
