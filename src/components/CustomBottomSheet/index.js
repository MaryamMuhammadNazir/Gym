import React, { forwardRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
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
    const [progress, setProgress] = useState(0.3);
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
        id: 0,
        url: 'https://picsum.photos/id/2/200/300',
        time: '9:24:00',
        text: 'Warm up',
        subTxt: '10 miutes',
      },
      {
        id: 0,
        url: 'https://picsum.photos/id/3/200/300',
        time: '6:24:00',
        text: 'Jump squats',
        subTxt: '3 sets , 4 reps each',
      },
      {
        id: 0,
        url: 'https://picsum.photos/id/4/200/300',
        time: '1:24:00',
        text: 'Warm up',
        subTxt: '3 sets , 4 reps each',
      },
      {
        id: 0,
        url: 'https://picsum.photos/id/5/200/300',
        time: '4:24:00',
        text: 'Warm up',
        subTxt: '10 miutes',
      },
    ]);
    const [snapDirection, setSnapDirection] = useState('left');
    const [mode, setMode] = useState('horizontal-stack');

    // Handler to set the progress value based on the image slide state
    const handleProgress = () => {
      if (isImageSlideOpen) {
        // Set progress to 1 when the image slide is open
        setProgress(progress + 0.1);
      } else {
        // Set progress to default value (0.3) when the image slide is closed
        setProgress(0.3);
      }
    };
    return (
      <BottomSheetModal ref={ref} snapPoints={snapPoints} index={0} >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            backgroundColor: Colors.white,
          }}>
          {isImageSlideOpen === true ? (
            <>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Animated.Text entering={FadeInDown.duration(1000)}
                  style={{
                    marginVertical: HP(2),
                    fontSize: HP(3),
                    color: Colors.black,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  Today's routine for you
                </Animated.Text>
                <Animated.Text entering={FadeInDown.duration(1000)}>7 exercises, 3 sets, 8 reps</Animated.Text>
              </View>
              {/* Use here the progress bar */}
              <Animated.View entering={FadeInDown.duration(1000)} style={{ marginTop: HP(3) }}>
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
              </Animated.View>
              <Animated.View entering={FadeIn.duration(1000)} style={{ flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
                {/* Use the Carousel component here */}
                <Carousel
                  width={300}
                  loop
                  height={350}
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
                    // Update the progress based on the current index
                    const newProgress = (index + 1) / images.length; // Calculate the new progress
                    setProgress(newProgress); // Update the progress state
                  }}
                  data={images}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center', alignSelf: "center"
                      }}>
                      <ImageBackground
                        source={{ uri: item.url }}
                        borderRadius={20}
                        style={{
                          width: 270,
                          height: 270,
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
                            style={{ height: 40, width: 40, resizeMode: 'cover' }}
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
              </Animated.View>
              <Text>Swipe when done to view next</Text>
            </>
          ) : (
            <>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Animated.Text entering={FadeInUp.duration(1000)}
                  style={{
                    marginVertical: HP(3),
                    fontSize: HP(3),
                    color: Colors.black,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  You're on a roll!
                </Animated.Text>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Animated.Text entering={FadeInUp.duration(1000)}
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
              marginBottom: HP(3),
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
      </BottomSheetModal>
    );
  },
);

export default CustomBottomSheet;
