import React, { forwardRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';
import { HP, WP } from '../../utility/ResponsiveSize';
import { Colors, Images } from '../../assets';
import * as Progress from 'react-native-progress';
import Carousel from 'react-native-reanimated-carousel'; // Import the Carousel component

const CustomBottomSheet = forwardRef(
  (
    { snapPoints, handlePressEndSession, isImageSlideOpen, setImageSliderOpen },
    ref,
  ) => {
    const [progress, setProgress] = useState(0.3);
    const width = Dimensions.get('window').width;

    const [images, setImages] = React.useState([
      {
        id: 0,
        url: 'https://picsum.photos/id/1/200/300',
      },
      {
        id: 0,
        url: 'https://picsum.photos/id/2/200/300',
      },
      {
        id: 0,
        url: 'https://picsum.photos/id/3/200/300',
      },
      {
        id: 0,
        url: 'https://picsum.photos/id/4/200/300',
      },
      {
        id: 0,
        url: 'https://picsum.photos/id/5/200/300',
      },
    ]);
    const imagesURL = [
      { id: 1, url: require('../../assets/images/img.png') },
      { id: 1, url: require('../../assets/images/img.png') },
      { id: 1, url: require('../../assets/images/img.png') },
      // Add more objects for additional images if needed
    ];

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
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
              {/* Use here the progress bar */}
              <Progress.Bar
                progress={progress}
                width={300}
                unfilledColor={Colors.tabbgclr}
                borderWidth={0}
                color={Colors.primary}
                height={15}
                borderRadius={20}
              />
              <View style={{ flex: 1 }}>
                {/* Use the Carousel component here */}
                <Carousel
                  loop
                  width={width}
                  height={width / 2}
                  autoPlay={true}
                  scrollAnimationDuration={1000}
                  onSnapToItem={index => console.log('current index:', index)}
                  data={images}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        flex: 1,
                        borderWidth: 1,
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={{ uri: item.url }}
                        style={{
                          width: 200,
                          height: 200,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>
                  )}
                />
              </View>
              <Text>Swipe when done to view next</Text>
            </>
          ) : (
            <>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
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
