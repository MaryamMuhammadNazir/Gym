import {
  StyleSheet,
  Platform,
  View,
  Image,
  TouchableOpacity,
  Text,
  Button,
  FlatList,
} from 'react-native';
// import { Sound } from 'react-native-sound';
import React, {useState, useEffect} from 'react';
import CustomizeHeader from '../../../components/CustomizeHeader';
import {Colors, Images, data} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize';
import CustomHeading from '../../../components/CustomHeading';
import dings from '../../../assets/audios/audio11.mp3';
import LottieView from 'lottie-react-native';
import Animations from '../../../assets/animations/Animations';
import {styles} from './styles';
let Sound = require('react-native-sound');
const SoundCustom = () => {
  const [playing, setPlaying] = useState(false);
  const [selected, setSelected] = useState(dings);

  Sound.setCategory('Playback');
  var audio = new Sound(selected, null, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });

  const files = [
    {id: '1', file: dings, time: '3:00'},
    {id: '2', file: dings, time: '2:30'},
    {id: '3', file: dings, time: '1:70'},
    {id: '4', file: dings, time: '4:00'},
    {id: '5', file: dings, time: '3:00'},
    {id: '6', file: dings, time: '5:00'},
    {id: '7', file: dings, time: '9:08'},
    {id: '8', file: dings, time: '1:00'},
    {id: '9', file: dings, time: '2:00'},
  ];

  useEffect(() => {
    audio.setVolume(1);
    return () => {
      audio.release();
    };
  }, []);

  const playPause = () => {
    if (audio.isPlaying()) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play(success => {
        if (success) {
          setPlaying(false);
          console.log('successfully finished playing');
        } else {
          setPlaying(false);
          console.log('playback failed due to audio decoding errors');
        }
      });
      setPlaying(true);
    }
  };

  const [selectedItem, setSelectedText] = useState('Imported music');

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        width: '100%',
        backgroundColor: Colors.cardclr,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.white,
        justifyContent: 'space-between',
      }}
      // onPress={() => setSelected(item.file)}>
      onPress={() => {
        setSelected(item.file);
        setPlaying(true);
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: Colors.white, fontSize: 15, padding: 18}}>
          {item.time}
        </Text>
        <Text style={{color: Colors.white, fontSize: 15, padding: 18}}>
          {item.file}
        </Text>
      </View>
      <View>
        <Image
          source={Images.PLAYFILLED}
          tintColor={Colors.white}
          style={{
            height: 25,
            width: 25,
            resizeMode: 'cover',
            marginHorizontal: 15,
          }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomizeHeader isVisible={true} />
      <View style={styles.contentContainerStyle}>
        <CustomHeading
          mainText="Sound it"
          subText="Keep it fun with sounds of your device"
        />
      </View>
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
          <View>
            <Text
              style={{
                color: Colors.white,
                padding: 10,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Now Playing
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.cardclr,
              width: '95%',
              height: 70,
              borderRadius: 20,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderRightWidth: 1,
                width: 70,
                height: '90%',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: Colors.tabbgclr,
              }}>
              <LottieView
                source={Animations.MUSIC}
                autoPlay={playing}
                resizeMode="cover"
                style={styles.lottieView}
              />
            </View>
            <View>
              <Text
                style={{
                  color: Colors.white,
                  alignItems: 'flex-start',
                  alignSelf: 'flex-start',
                  justifyContent: 'flex-start',
                }}>
                {selected}
              </Text>
            </View>
            <TouchableOpacity onPress={() => setPlaying(!playing)}>
              <Image
                source={playing == false ? Images.BELL : Images.PLAYFILLED}
                style={{
                  resizeMode: 'cover',
                  height: 30,
                  width: 30,
                  marginHorizontal: 10,
                }}
                tintColor={Colors.white}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: Colors.white,
                padding: 10,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Your Queue
            </Text>
            {/* <Button title={playing ? 'Pause' : 'Play'} onPress={playPause} /> */}
          </View>
          <FlatList
            data={files}
            renderItem={renderItem}
            keyExtractor={item => item.id}
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
