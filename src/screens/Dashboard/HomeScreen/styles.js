import {Colors} from '../../../assets';
import {HP, WP} from '../../../utility/ResponsiveSize';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    padding: WP(5),
    backgroundColor: Colors.cardclr,
    paddingHorizontal: WP(3),
    borderRadius: WP(5),
  },

  contentContainerStyle: {
    paddingHorizontal: WP(5),
    flexGrow: 1,
  },
  dateText: {
    fontSize: WP(2.5),
    alignContent: 'center',
    color: Colors.white,
    fontFamily: 'SFProText-Regular',
    justifyContent: 'flex-start',
  },
  barConatianer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  weekContainer: {
    borderRadius: WP(5),
    backgroundColor: Colors.tabbgclr,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: HP(1),
    alignItems: 'center',
  },
  downArrow: {
    height: 7,
    width: 10,
    resizeMode: 'cover',
  },
  speedometerContainer: {
    alignItems: 'center',
    marginTop: HP(3),
  },

  barContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  speedometerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  routineText: {
    color: Colors.white,
    fontSize: HP(2.25),
    marginBottom: HP(1),
    fontFamily: 'SFPro-Semibold',
  },
  exerciseContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.cardclr,
    flexWrap: 'wrap',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exerciseText: {
    fontSize: HP(1.65),
    color: Colors.white,
    marginHorizontal: HP(2),
    fontFamily: 'SFProText-Regular',
  },
  image: {},
  textContainer: {},
  text: {},
});

export default styles;
