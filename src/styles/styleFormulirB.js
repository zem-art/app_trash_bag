import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 55,
    width: '100%',
    backgroundColor: '#5ad488ff',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  pactImage: {
    height: 150,
    // borderWidth: 1,
  },
  inImage: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    // borderWidth: 1,
  },
  image: {
    height: '70%',
    width: '30%',
    borderRadius: 50,
  },
  body: {
    // backgroundColor: '#5ad488ff',
    // borderWidth: 1,
    paddingHorizontal: 10,
  },
  bottom: {
    height: 40,
  },
  inbody: {
    // flexDirection: 'row',
    // backgroundColor: '#5ad488ff',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  data: {
    marginVertical: 5,
  },
  inData: {
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9',
    marginTop: 5,
    marginLeft: 10,
  },
  klik: {
    marginTop: 10,
    borderRadius: 10,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBootom: {
    fontSize: 20,
    color: '#ffff',
  },
  loading: {
    alignSelf: 'center',
  },
});

export {styles};
