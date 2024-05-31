import { StyleSheet, Platform } from 'react-native';
import { HP, WP } from '../../utility/ResponsiveSize';
import { Colors } from '../../assets';

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? HP(5) : HP(3),
    backgroundColor: Colors.tabbgclr,
    flex: 1,
  },
  contentContainer: {
    // padding: WP(5),
    // borderRadius: WP(5),
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: '100%',
  },
  header: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WP(3),
    marginBottom: HP(7),
  },
  headerLeft: {
    flexWrap: 'wrap',
  },
  headerCenter: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  headerText: {
    color: Colors.white,
    ontSize: 20, fontFamily: "SFProText-Bold"
  },
  row: {
    flexDirection: 'row',
    backgroundColor: Colors.cardclr,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: HP(0.7),
    padding: 10,
  },
  rowText: {
    color: Colors.white,
    fontSize: 18,
    paddingHorizontal: HP(1),
    fontFamily: 'SFPro-Semibold',
  },
  rowImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginHorizontal: HP(1),
  },
  switchContainer: {
    marginHorizontal: HP(0),
  },
  switchInnerCircle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchStyle: {},
});
