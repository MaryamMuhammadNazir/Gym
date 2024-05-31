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
    fontFamily: 'SFProText-Regular',
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
    fontFamily: 'SFPro-Semibold',
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
    fontFamily: 'SFProText-Regular',
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
    fontFamily: 'SFProText-Regular',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    backgroundColor: Colors.black,
    borderRadius: 10,
    padding: 20,
  },
  video: {
    width: '100%',
    height: HP(70),
  },
  closeButton: {
    // marginTop: 20,
    // padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 50,
    alignItems: 'center',
    height: 40,
    width: 40,
    justifyContent: 'center',
    position: 'absolute',
    top: HP(5),
    right: HP(2.5),
  },
  closeButtonText: {
    color: Colors.white,
    fontSize: 16,
  },
});
