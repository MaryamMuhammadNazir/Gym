import {
  StyleSheet,
  Platform,
  View,
  Image,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import CustomizeHeader from '../../../components/CustomizeHeader';
import { Colors, Images, data } from '../../../assets';
import { WP, HP } from '../../../utility/ResponsiveSize';
import CustomHeading from '../../../components/CustomHeading';
import { styles } from './styles';
// import Sound from 'react-native-sound';
import TrackPlayer from 'react-native-track-player';

const SoundCustom = () => {
  const [selectedItem, setSelectedText] = useState('Imported music');
  const data = [
    {
      id: 1,
      file: require('../../../assets/audios/mixkit-mystwrious-bass-pulse-2298.mp3'),
    },
    {
      id: 2,
      file: require('../../../assets/audios/mixkit-mystwrious-bass-pulse-2298.mp3'),
    },
    {
      id: 3,
      file: require('../../../assets/audios/mixkit-mystwrious-bass-pulse-2298.mp3'),
    },
  ];
  const [selectedFile, setSelectedFile] = useState(data[0]);


  const playAudio = async () => {
    console.log('is hititng');

    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('../../../assets/audios/mixkit-mystwrious-bass-pulse-2298.mp3'),
      title: 'Track Title',
      artist: 'Track Artist',
      // artwork: require('track.png')
    });

    // Start playing it
    await TrackPlayer.play();

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
        <View style={{ backgroundColor: "red" }}>
          <Text>Imported music</Text>

        </View>

      </View>
      {
        data?.music?.map((item, index) => (
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
        ))
      }
      {
        selectedItem === 'Imported music' ? (
          <View style={styles.importedMusic}>
            <Button
              title="play"
              onPress={() => {
                playAudio()
              }}
            />
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
        )
      }
    </View >
  );
};

export default SoundCustom;
