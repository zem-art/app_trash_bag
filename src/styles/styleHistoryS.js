import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containe: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: '25%',
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#5ad488ff',
  },
  back: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  data: {
    flex: 1,
    // height: '100%',
    // borderWidth: 1,
    paddingHorizontal: 10,
  },
  inData: {
    borderWidth: 1,
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  Loading1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {styles};
