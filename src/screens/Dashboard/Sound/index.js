import {
  StyleSheet,
  Platform,
  View,
  Image,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import CustomizeHeader from '../../../components/CustomizeHeader';
import {Colors, Images, data} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize';
import CustomHeading from '../../../components/CustomHeading';
import {styles} from './styles';
import Sound from 'react-native-sound';

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

  const playAudio = () => {
    console.log('is hititng');
    var whoosh = new Sound(data[0].file, Sound.MAIN_BUNDLE, error => {
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
            title="palay"
            onPress={() => {
              playAudio();
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
      )}
    </View>
  );
};

export default SoundCustom;
