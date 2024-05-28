import {
  StyleSheet,
  Platform,
  View,
  Image,
  TouchableOpacity,
  Text, Button
} from 'react-native';
import { Sound } from "react-native-sound";
import React, { useState } from 'react';
import CustomizeHeader from '../../../components/CustomizeHeader';
import { Colors, Images, data } from '../../../assets';
import { WP, HP } from '../../../utility/ResponsiveSize';
import CustomHeading from '../../../components/CustomHeading';

const SoundCustom = () => {

  const files = [
    {
      id: 1,
      file: require('../../../assets/audios/audio11.mp3'),
    },
    {
      id: 2,
      file: require('../../../assets/audios/audio.mp3'),
    },
    {
      id: 3,
      file: require('../../../assets/audios/audio.mp3'),
    },
  ];
  const [selectedFile, setSelectedFile] = useState(files[0]);

  const [selectedItem, setSelectedText] = useState('Imported music');
  const playAudio = () => {
    var whoosh = new Sound('../../../assets/audios/audio11.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
        whoosh.getDuration() +
        'number of channels: ' +
        whoosh.getNumberOfChannels(),
      );

      // Play the sound with an onEnd callback
      whoosh.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };
  return (
    <View style={styles.container}>
      <CustomizeHeader isVisible={true} />
      <View style={styles.contentContainerStyle}>
        <CustomHeading
          mainText="Sound it"
          subText="Keep it fun with sounds of your device"
        />
      </View>
      {/* btn view */}
      <View style={styles.btnView}>
        {data?.music?.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.item,
              {
                backgroundColor: selectedItem === item ? Colors.primary : null,
              },
            ]}
            onPress={() => setSelectedText(item)}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedItem === 'Imported music' ? (
        <View style={styles.importedMusic}>
          <Button
            title="play"
            onPress={() => {
              playAudio();
            }} />
        </View>
      ) : (
        <View style={styles.connectAppsContainer}>
          <Text style={styles.connectAppsText}>Connect your apps</Text>
          <View style={styles.connectAppsInnerContainer}>
            <TouchableOpacity style={styles.musicCard}>
              <View style={styles.playButton}>
                <Image
                  source={Images.PLAY}
                  tintColor={Colors.white}
                  style={styles.playButtonImage}
                />
              </View>
              <Text style={styles.ytMusicTxt}>YouTube music</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dashedBorderCard}>
              <Image
                source={Images.PLUS}
                tintColor={Colors.white}
                style={styles.plusImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default SoundCustom;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? HP(5) : 0,
    backgroundColor: Colors.tabbgclr,
    flex: 1,
  },
  contentContainerStyle: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(3),
  },
  btnView: {
    width: '55.5%',
    flexDirection: 'row',
    borderRadius: HP(1),
    backgroundColor: Colors.cardclr,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: HP(2),
  },
  item: {
    padding: HP(1),
  },
  itemText: {
    color: Colors.white,
    padding: WP(0.25),
  },
  importedMusic: {
    flex: 1,
    backgroundColor: 'red',
  },
  connectAppsContainer: {
    flex: 1,
    marginHorizontal: HP(2),
    marginVertical: WP(10),
  },
  connectAppsText: {
    color: 'white',
    fontSize: HP(3),
  },
  connectAppsInnerContainer: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: WP(5),
  },
  musicCard: {
    height: 130,
    width: 130,
    borderRadius: HP(3),
    backgroundColor: Colors.cardclr,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: HP(0.5),
  },
  playButton: {
    height: 70,
    width: 70,
    borderRadius: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ytMusicTxt: { color: Colors.white, fontSize: HP(1.5), marginTop: HP(1) },
  playButtonImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  plusImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  dashedBorderCard: {
    height: 130,
    width: 130,
    borderRadius: HP(3),
    marginHorizontal: HP(0.5),
    borderColor: Colors.white,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderStyle: 'dashed',
  },
});
