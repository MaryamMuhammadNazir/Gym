import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors, Images} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Calculate sizes based on responsive screen dimensions
const imageSize = wp('11%');
const bellIconSize = wp('5%');
const recorderIconSize = wp('7%');
const paddingHorizontal = wp('5%');

const CustomizeHeader = ({isVisible, onpressNotification, inputText}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', width: '80%'}}>
        <Image
          source={Images.DP}
          style={[styles.imgStyle, {width: imageSize, height: imageSize}]}
        />
        {isVisible && (
          <View style={styles.searchContainer}>
            <Image
              source={Images.SEARCH}
              style={[styles.icon, {width: bellIconSize, height: bellIconSize}]}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Search"
              text={inputText}
              placeholderTextColor={Colors.white}
            />
            <Image
              source={Images.RECORDER}
              style={[
                styles.icon,
                {width: recorderIconSize, height: recorderIconSize},
              ]}
            />
          </View>
        )}
      </View>
      <TouchableOpacity onPress={onpressNotification}>
        <Image
          source={Images.BELL}
          style={[styles.bellicon, {width: bellIconSize, height: bellIconSize}]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomizeHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.tabbgclr,
    padding: 10,
    paddingHorizontal: paddingHorizontal,
    flexWrap: 'wrap',
  },
  imgStyle: {
    borderRadius: wp('10%'),
    resizeMode: 'contain',
  },
  bellicon: {
    tintColor: Colors.white,
    resizeMode: 'contain',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    opacity: 0.7, // 70% transparency
    borderRadius: 10,
    paddingHorizontal: 10,
    marginLeft: 10,
    height: hp('5%'),
    width: wp('68%'),
  },
  textInput: {
    flex: 1,
    marginHorizontal: 5,
    color: Colors.white,
  },
  icon: {
    tintColor: Colors.white,
    resizeMode: 'contain',
  },
});
