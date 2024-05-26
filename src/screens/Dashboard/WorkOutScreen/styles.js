import {StyleSheet} from 'react-native';
import {HP, WP} from '../../../utility/ResponsiveSize';
import {Colors} from '../../../assets';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tabbgclr,
    flex: 1,
  },
  contentContainerStyle: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(5),
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
  backgroundVideo: {
    width: '100%',
    height: 200,
  },
  card1: {
    backgroundColor: Colors.cardclr,
    padding: HP(1),
    borderRadius: HP(3),
    justifyContent: 'center',
  },
  card: {
    backgroundColor: Colors.cardclr,
    padding: HP(1),
    borderRadius: HP(3),
    justifyContent: 'center',
    width: '48%', // Adjusted width to fit two cards in a row
    marginBottom: HP(2),
  },
  thumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recommendationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  sectionTitle: {
    color: Colors.white,
    fontSize: HP(3),
    paddingVertical: HP(2),
  },
  videoInfoContainer: {
    position: 'absolute',
    bottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
  },
  videoDuration: {
    backgroundColor: Colors.white,
    color: Colors.tabbgclr,
    paddingHorizontal: HP(1.5),
    borderRadius: HP(1),
    alignSelf: 'center',
  },
  playIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  videoTitle: {
    color: Colors.white,
    paddingTop: 5,
    fontSize: HP(1.75),
    left: HP(2),
  },
});
