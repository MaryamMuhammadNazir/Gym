import {Image, TouchableOpacity, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Colors, Images} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {HP, WP} from '../../../utility/ResponsiveSize';

const Accountsetting = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('Name');
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
            <Text style={styles.headerText}>Account</Text>
          </View>
          <View style={styles.headerrigth}>
            <Text style={styles.headerText}>Done</Text>
          </View>
        </View>
        {/* middle view */}
        <View style={styles.middleView}>
          <View style={styles.dpView}>
            <View>
              <Image
                source={Images.DP}
                borderRadius={100}
                style={{
                  height: 120,
                  width: 120,
                  resizeMode: 'cover',
                  borderColor: Colors.white,
                  borderWidth: HP(0.25),
                }}
              />
            </View>
            <View
              style={{
                borderRadius: HP(0.75),
                backgroundColor: Colors.cardclr,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.chngeTxt}>Changes</Text>
            </View>
            <View
              style={{
                borderRadius: HP(0.75),
                backgroundColor: Colors.cardclr,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                width: 70,
              }}>
              <View
                style={{height: 20, width: 20, backgroundColor: 'red'}}></View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.cardclr,
              flexDirection: 'row',
              marginTop: HP(1),
              alignItems: 'center',
              paddingHorizontal: HP(1),
            }}>
            <TextInput
              editable
              maxLength={40}
              onChangeText={text => setText(text)}
              value={text}
              placeholderTextColor={Colors.white}
              style={{flex: 1, color: Colors.white, padding: 10, fontSize: 16}}
            />

            <Image
              source={Images.CLOSE}
              tintColor={Colors.white}
              style={{height: 25, width: 25, resizeMode: 'cover'}}
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.cardclr,
              flexDirection: 'row',
              marginTop: HP(1),
              alignItems: 'center',
              paddingHorizontal: HP(1),
            }}>
            <TextInput
              editable
              maxLength={40}
              onChangeText={text => setText(text)}
              value={text}
              placeholderTextColor={Colors.white}
              style={{flex: 1, color: Colors.white, padding: 10, fontSize: 16}}
            />

            <Image
              source={Images.CLOSE}
              tintColor={Colors.white}
              style={{height: 25, width: 25, resizeMode: 'cover'}}
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.cardclr,
              flexDirection: 'row',
              marginTop: HP(1),
              alignItems: 'center',
              paddingHorizontal: HP(1),
            }}>
            <TextInput
              editable
              maxLength={40}
              onChangeText={text => setText(text)}
              value={text}
              placeholderTextColor={Colors.white}
              style={{flex: 1, color: Colors.white, padding: 10, fontSize: 16}}
            />

            <Image
              source={Images.CLOSE}
              tintColor={Colors.white}
              style={{height: 25, width: 25, resizeMode: 'cover'}}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.deletetxt}>Delete your account</Text>
      </View>
    </View>
  );
};

export default Accountsetting;
