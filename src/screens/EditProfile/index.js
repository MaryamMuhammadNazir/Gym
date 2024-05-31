import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Colors, Images } from '../../assets';
import { Switch } from 'react-native-switch';
import Routes from '../../navigation/Routes';

const EditProfile = () => {
  const navigation = useNavigation();
  const [isDataSaverEnabled, setIsDataSaverEnabled] = useState(false);
  const [isPushNotificationEnabled, setIsPushNotificationEnabled] =
    useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Profile header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerLeft}
            onPress={() => navigation.goBack()}>
            <Image
              source={Images.LEFTARROW}
              tintColor={Colors.white}
              style={styles.headerImage}
            />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerText}>Profile</Text>
          </View>
        </View>

        <Pressable
          style={styles.row}
          onPress={() => {
            navigation.navigate(Routes.ACCOUNTSETTING);
          }}>
          <Text style={styles.rowText}>Account</Text>
          <Image
            source={Images.RIGHTARROW}
            tintColor={Colors.white}
            style={styles.rowImage}
          />
        </Pressable>

        <Pressable style={styles.row} onPress={() => { }}>
          <Text style={styles.rowText}>Data privacy</Text>
          <Image
            source={Images.RIGHTARROW}
            tintColor={Colors.white}
            style={styles.rowImage}
          />
        </Pressable>

        <Pressable style={styles.row} onPress={() => { }}>
          <Text style={styles.rowText}>Data Saver</Text>
          <View style={styles.switchContainer}>
            <Switch
              value={isDataSaverEnabled}
              onValueChange={val => setIsDataSaverEnabled(val)}
              disabled={false}
              activeText={'On'}
              inActiveText={'Off'}
              circleSize={20}
              barHeight={25}
              circleBorderWidth={0}
              backgroundActive={'green'}
              backgroundInactive={Colors.secondary}
              circleActiveColor={Colors.white}
              circleInActiveColor={Colors.white}
              changeValueImmediately={true}
              innerCircleStyle={styles.switchInnerCircle}
              renderActiveText={false}
              renderInActiveText={false}
              switchLeftPx={2}
              switchRightPx={2}
              switchWidthMultiplier={2}
              switchBorderRadius={20}
              style={styles.switchStyle}
            />
          </View>
        </Pressable>

        <Pressable style={styles.row}>
          <Text style={styles.rowText}>Push notifications</Text>
          <View style={styles.switchContainer}>
            <Switch
              value={isPushNotificationEnabled}
              onValueChange={val => setIsPushNotificationEnabled(val)}
              disabled={false}
              activeText={'On'}
              inActiveText={'Off'}
              circleSize={20}
              barHeight={25}
              circleBorderWidth={0}
              backgroundActive={'green'}
              backgroundInactive={Colors.secondary}
              circleActiveColor={Colors.white}
              circleInActiveColor={Colors.white}
              changeValueImmediately={true}
              innerCircleStyle={styles.switchInnerCircle}
              renderActiveText={false}
              renderInActiveText={false}
              switchLeftPx={2}
              switchRightPx={2}
              switchWidthMultiplier={2}
              switchBorderRadius={20}
              style={styles.switchStyle}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default EditProfile;
