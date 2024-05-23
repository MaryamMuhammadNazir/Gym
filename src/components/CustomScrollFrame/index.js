import React, {useState} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';
// import {styles} from './ScrollFrameStyle';

const ScrollFrame = () => {
  const [selectedItem, setSelectedItem] = useState('All');

  const handleItemPress = text => {
    setSelectedItem(text);
  };

  return (
    <ScrollView
      bounces={false}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <TouchableOpacity onPress={() => handleItemPress('All')}>
        <Text
          style={{
            borderColor: selectedItem === 'All' ? primary : 'transparent',
            opacity: selectedItem === 'All' ? 0.7 : 1,
          }}>
          All
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleItemPress('Appartment')}>
        <Text
          style={{
            borderColor:
              selectedItem === 'Appartment' ? primary : 'transparent',
            opacity: selectedItem === 'Appartment' ? 0.7 : 1,
          }}>
          Appartment
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleItemPress('Villa')}>
        <Text
          style={{
            borderColor: selectedItem === 'Villa' ? primary : 'transparent',
            opacity: selectedItem === 'Villa' ? 0.7 : 1,
          }}>
          Villa
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleItemPress('Hotel')}>
        <Text
          style={{
            borderColor: selectedItem === 'Hotel' ? primary : 'transparent',
            opacity: selectedItem === 'Hotel' ? 0.7 : 1,
          }}>
          Hotel
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleItemPress('Camping')}>
        <Text
          style={{
            borderColor: selectedItem === 'Camping' ? primary : 'transparent',
            opacity: selectedItem === 'Camping' ? 0.7 : 1,
          }}>
          camping
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ScrollFrame;
