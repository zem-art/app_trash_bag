import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#5ad488ff',
  },
  inIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    backgroundColor: '#5ad488ff',
    height: 180,
    // borderWidth: 1,
  },
  inProfile: {
    height: '44%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  dataScroll: {
    backgroundColor: '#7f4',
    height: 70,
    width: 100,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  body: {
    marginVertical: 10,
    alignItems: 'center',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 70,
    // justifyContent: 'center',
    // marginHorizontal: 10,
    // borderWidth: 1,
  },
  touch: {
    height: 50,
    width: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    // flexDirection: 'row',
    // borderWidth: 1,
  },
  icon: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  PactText: {
    alignItems: 'center',
  },
  iconT: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  history: {
    height: 25,
    width: 20,
  },
  iconImage: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    borderRadius: 50,
  },
  loading: {
    alignSelf: 'center',
  },
  loading1: {
    alignSelf: 'center',
  },
  iconLeft: {
    height: 20,
    width: 20,
  },
});

export {styles};
