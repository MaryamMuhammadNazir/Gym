import { Platform, StyleSheet } from 'react-native';
import { HP, WP } from '../../../utility/ResponsiveSize';
import { Colors } from '../../../assets';

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? HP(5) : 0,
    backgroundColor: Colors.tabbgclr,
    flex: 1,
  },
  contentContainerStyle: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(3),
  },
  btnView: {
    width: '55.5%',
    flexDirection: 'row',
    borderRadius: HP(1),
    backgroundColor: Colors.cardclr,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: HP(2),
  },
  item: {
    padding: HP(1),

    backgroundColor: "red"
  },
  itemText: {
    color: Colors.white,
    padding: WP(0.25),
  },
  importedMusic: {
    flex: 1,
    // backgroundColor: 'red',
  },
  connectAppsContainer: {
    flex: 1,
    marginHorizontal: HP(2),
    marginVertical: WP(10),
  },
  connectAppsText: {
    color: 'white',
    fontSize: HP(3),
  },
  connectAppsInnerContainer: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: WP(5),
  },
  musicCard: {
    height: 130,
    width: 130,
    borderRadius: HP(3),
    backgroundColor: Colors.cardclr,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: HP(0.5),
  },
  playButton: {
    height: 70,
    width: 70,
    borderRadius: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ytMusicTxt: { color: Colors.white, fontSize: HP(1.5), marginTop: HP(1) },
  playButtonImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  plusImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  dashedBorderCard: {
    height: 130,
    width: 130,
    borderRadius: HP(3),
    marginHorizontal: HP(0.5),
    borderColor: Colors.white,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderStyle: 'dashed',
  },
});
