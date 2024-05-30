import React, {forwardRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import BottomSheet, {BottomSheetModal} from '@gorhom/bottom-sheet';
import {HP, WP} from '../../utility/ResponsiveSize';
import {Colors, Images} from '../../assets';
import * as Progress from 'react-native-progress';
import Carousel from 'react-native-reanimated-carousel'; // Import the Carousel component

const CustomBottomSheet = forwardRef(
  (
    {snapPoints, handlePressEndSession, isImageSlideOpen, setImageSliderOpen},
    ref,
  ) => {
    const [progress, setProgress] = useState(0.1);
    const width = Dimensions.get('window').width;

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
      <BottomSheetModal ref={ref} snapPoints={snapPoints} index={0}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            backgroundColor: Colors.white,
          }}>
          {isImageSlideOpen === true ? (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {/* top view */}
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
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

              <View style={{flex: 0.87}}>
                <View style={{marginTop: HP(3)}}>
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
                {/* Use the Carousel component here */}
                <Carousel
                  width={300}
                  loop
                  height={400}
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
                  renderItem={({item}) => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                      }}>
                      <ImageBackground
                        source={{uri: item.url}}
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
                            style={{height: 40, width: 40, resizeMode: 'cover'}}
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
              <Text style={{color: Colors.tabbgclr, fontSize: HP(1.7)}}>
                Swipe when done to view next
              </Text>
            </View>
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
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
              marginBottom: HP(1),
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}>
            <View>
              <TouchableOpacity onPress={handlePressEndSession}>
                <Text
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    padding: HP(3),
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
