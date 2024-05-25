import {
  StyleSheet,
  Platform,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import CustomizeHeader from '../../../components/CustomizeHeader';
import {Colors, data} from '../../../assets';
import {WP, HP} from '../../../utility/ResponsiveSize'; // Import WP and HP
import CustomHeading from '../../../components/CustomHeading';

const Workout = () => {
  const [selectedItem, setSelectedText] = useState('body building');

  return (
    <View
      style={[
        styles.container,
        {paddingTop: Platform.OS === 'ios' ? HP(5) : 0},
      ]}>
      <CustomizeHeader isVisible={false} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <CustomHeading
          mainText="Work Out"
          subText="We have videos curated for you"
        />
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
              onPress={() => setSelectedText(item)}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tabbgclr,
    flex: 1,
  },
  contentContainerStyle: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(3),
  },
  scrollView: {
    paddingVertical: HP(2),
  },
  item: {
    borderWidth: 1,
    borderRadius: WP(2),
    marginHorizontal: WP(2),
    padding: HP(1),
  },
  itemText: {
    color: Colors.white,
    padding: WP(0.25),
  },
});
