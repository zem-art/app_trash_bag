import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    width: '100%',
    // backgroundColor: '#5ad488ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  buttomHeader: {
    height: 160,
    width: '100%',
    // borderWidth: 1,
  },
  pactIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  endIcon: {},
  icon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  pactImage: {
    height: '50%',
    // borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon1: {
    height: 20,
    width: 20,
  },
  body: {
    height: '80%',
    width: 100,
    backgroundColor: '#ffffff',
    opacity: 0.5,
    borderRadius: 10,
    // flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  outBody: {
    paddingHorizontal: 10,
    // borderWidth: 1,
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 50,
    marginRight: 10,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loading1: {
    alignSelf: 'center',
  },
  toc: {
    top: 20,
  },
  pactBottom: {
    // borderWidth: 1,
    paddingHorizontal: 10,
  },
  imageData: {
    height: 40,
    width: 40,
    borderRadius: 10,
    marginRight: 10,
  },
  inBottom: {
    // borderWidth: 1,
    marginVertical: 10,
    // maxHeight: 100,
    height: 70,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#7cfc00',
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inImage: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  items: {
    marginRight: 10,
    // borderWidth: 1,
  },
  PactName: {
    // maxWidth: '75%',
    // borderWidth: 1,
  },
  iconLeft: {
    height: 20,
    width: 20,
  },
  textFind: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 15,
  },
  pactFind: {
    marginTop: 5,
    backgroundColor: '#5ad488ff',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Loading1: {
    alignItems: 'center',
    // alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export {styles};
