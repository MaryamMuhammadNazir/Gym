import {Colors} from '../../../assets';
import {HP, WP} from '../../../utility/ResponsiveSize';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: 'space-around',
    padding: WP(5),
    // alignItems: 'center',
    backgroundColor: 'grey',
    opacity: 0.7,
    paddingHorizontal: WP(3),
    borderRadius: WP(5),
  },
  contentContainerStyle: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(3),
    flex: 1,
  },
  dateText: {
    fontSize: WP(3), // Example usage of WP for font size
    alignContent: 'center',
    color: Colors.white,
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
  halfCircleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: 200,
    height: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  halfCircleGradient: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  speedometerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default styles;
