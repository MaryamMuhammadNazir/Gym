import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Video from 'react-native-video';
import {Colors} from '../../../assets';
// import {Colors} from '../../../assets';
// import {Colors} from '../../../assets';

const FullScreenVideo = ({source, onClose}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>

      <Video
        source={source}
        style={styles.video}
        controls={true}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  closeButtonText: {
    color: Colors.white,
    fontSize: 18,
  },
  video: {
    flex: 1,
  },
});

export default FullScreenVideo;
