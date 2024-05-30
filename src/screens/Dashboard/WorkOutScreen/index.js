import React, { useState } from 'react';
import {
  Platform,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  Modal,
} from 'react-native';
import CustomizeHeader from '../../../components/CustomizeHeader';
import { Colors, Images, Videos, data } from '../../../assets';
import { WP, HP } from '../../../utility/ResponsiveSize';
import CustomHeading from '../../../components/CustomHeading';
import Video from 'react-native-video';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../navigation/Routes';

const Workout = () => {
  const [selectedItem, setSelectedItem] = useState('body building');
  const [modalVisible, setModalVisible] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const navigation = useNavigation();

  const handleThumbnailPress = videoSrc => {
    setVideoSource(videoSrc);
    setModalVisible(true);
  };

  return (
    <View
      style={[
        styles.container,
        { paddingTop: Platform.OS === 'ios' ? HP(5) : 0 },
      ]}>
      <CustomizeHeader isVisible={false} />

      <View style={{ paddingHorizontal: WP(5) }}>
        <CustomHeading
          mainText="Work Out"
          subText="We have videos curated for you"
        />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <ScrollView
          bounces={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}>
          {data?.items?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.item,
                {
                  borderColor:
                    selectedItem === item ? Colors.primary : Colors.white,
                  backgroundColor:
                    selectedItem === item ? Colors.primary : Colors.tabbgclr,
                },
              ]}
              onPress={() => {
                setSelectedItem(item);
              }}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View>
          <Text style={styles.sectionTitle}>Continue Watching</Text>

          <TouchableOpacity
            onPress={() => handleThumbnailPress(Videos.YOGA1)} // Replace with actual video source
            style={styles.card1}>
            <ImageBackground
              borderRadius={HP(3)}
              source={Images.THUMNAOL1}
              style={styles.thumbnail}>
              <View style={styles.videoInfoContainer}>
                <Text style={styles.videoDuration}>05:20</Text>
                <Image
                  tintColor={Colors.white}
                  source={Images.PLAYFILLED}
                  style={styles.playIcon}
                />
              </View>
            </ImageBackground>
            <Text style={styles.videoTitle}>Squats and Plungum</Text>
          </TouchableOpacity>
        </View>
        {/* Recommendation View */}
        <View>
          <Text style={styles.sectionTitle}>Recommendation</Text>
          <View style={styles.recommendationContainer}>
            <TouchableOpacity
              onPress={() => handleThumbnailPress(Videos.YOGA1)} // Replace with actual video source
              style={styles.card}>
              <ImageBackground
                borderRadius={HP(3)}
                source={Images.THUMNAOL1}
                style={styles.thumbnail}>
                <View style={styles.videoInfoContainer}>
                  <Text style={styles.videoDuration}>05:20</Text>
                  <Image
                    tintColor={Colors.white}
                    source={Images.PLAYFILLED}
                    style={styles.playIcon}
                  />
                </View>
              </ImageBackground>
              <Text style={styles.videoTitle}>Squats</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleThumbnailPress(Videos.YOGA1)} // Replace with actual video source
              style={styles.card}>
              <ImageBackground
                borderRadius={HP(3)}
                source={Images.THUMNAOL1}
                style={styles.thumbnail}>
                <View style={styles.videoInfoContainer}>
                  <Text style={styles.videoDuration}>05:20</Text>
                  <Image
                    tintColor={Colors.white}
                    source={Images.PLAYFILLED}
                    style={styles.playIcon}
                  />
                </View>
              </ImageBackground>
              <Text style={styles.videoTitle}>Plungum</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Modal to display video */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Video
              source={Videos.YOGA1}
              style={styles.video}
              controls={true}
              resizeMode="contain"
            />

          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}>
            <Image
              source={Images.CLOSE}
              style={{ height: 50, width: 50, resizeMode: 'cover' }}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Workout;
