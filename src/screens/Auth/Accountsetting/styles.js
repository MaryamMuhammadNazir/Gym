import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets';
import {HP, WP} from '../../../utility/ResponsiveSize';

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? HP(5) : HP(3),
    backgroundColor: Colors.tabbgclr,
    flex: 1,
    alignItems: 'center',
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WP(3),
    marginBottom: HP(2),
    flexWrap: 'wrap',
  },
  headerLeft: {
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  headerText: {
    color: Colors.white,
    fontSize: 20,
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
    fontSize: 20,
    paddingHorizontal: HP(1),
  },
  rowImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginHorizontal: HP(1),
  },
  middleView: {height: '75%'},
  chngeTxt: {
    color: Colors.white,
    alignSelf: 'center',
    fontSize: HP(1.75),
    paddingVertical: HP(1),
    paddingHorizontal: HP(2),
  },
  dpView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingHorizontal: HP(1),
    marginVertical: HP(2),
  },
  bottomView: {backgroundColor: Colors.cardclr, borderRadius: HP(1)},
  deletetxt: {
    color: Colors.white,
    alignSelf: 'center',
    fontSize: HP(1.75),
    paddingVertical: HP(1),
    paddingHorizontal: HP(2),
  },
});
