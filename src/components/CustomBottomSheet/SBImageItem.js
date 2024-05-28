import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {Colors, Images} from '../../assets';

const SBImageItem = ({style, index, showIndex = true, img}) => {
  const _index = index ?? 0;
  const source = React.useRef({
    uri: `https://picsum.photos/id/${_index}/400/300`,
  }).current;

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="small" />
      <ImageBackground key={_index} style={styles.image} source={img ?? source}>
        <ImageBackground
          source={Images.CIRCLE}
          tintColor={Colors.primary}
          style={{height: 20, width: 20, zIndex: 999}}
        />
      </ImageBackground>
      {showIndex && (
        <Text
          style={{
            position: 'absolute',
            color: 'white',
            fontSize: 40,
            backgroundColor: 'white',
            borderRadius: 5,
            overflow: 'hidden',
            paddingHorizontal: 10,
            paddingTop: 2,
          }}>
          {_index}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 300,
    position: 'absolute',
  },
});

export default SBImageItem;
