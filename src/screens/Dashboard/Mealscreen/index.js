import {
  StyleSheet,
  Platform,
  View,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import CustomizeHeader from '../../../components/CustomizeHeader';
import {Colors, Images} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize';
import CustomHeading from '../../../components/CustomHeading';

const MealScreen = () => {
  return (
    <View
      style={[
        styles.container,
        {paddingTop: Platform.OS === 'ios' ? HP(5) : 0},
      ]}>
      <CustomizeHeader isVisible={false} />
      <View style={[styles.contentContainer, {}]}>
        <Image
          source={Images.EMPTY}
          tintColor={Colors.white}
          style={{
            height: 350,
            width: 350,
            // marginTop: HP(13),
            resizeMode: 'cover',
          }}
        />
        <Text style={styles.mainHeading}>We are still building</Text>
        <Text style={styles.subHeading}>
          In our quest to give you the best service, we're <Text>{'\n'}</Text>{' '}
          working on a feature that help improve your health<Text>{'\n'}</Text>{' '}
          by suggesting healty meals that are in line with your{' '}
          <Text>{'\n'}</Text> body goals
        </Text>
      </View>
    </View>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: WP(5), // Adjust the font size as needed
    fontWeight: 'bold',
    marginBottom: HP(0), // Adjust the margin as needed
    color: Colors.primary,
  },
  container: {
    backgroundColor: Colors.tabbgclr,
    flex: 1,
  },
  subHeading: {
    fontSize: 13, // Adjust the font size as needed
    color: Colors.white,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: HP(2),
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
