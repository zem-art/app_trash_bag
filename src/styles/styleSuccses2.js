import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5ad488ff',
    // backgroundColor: '#ffff',
  },
  header: {
    height: '20%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    // borderWidth: 1,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: '35%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  klik: {
    height: '30%',
    width: '50%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // backgroundColor: '#5ad488ff',
    backgroundColor: '#ffff',
    // borderColor: '#5ad488ff',
    flexDirection: 'row',
  },
  textKlik: {
    fontSize: 20,
    // color: '#ffff',
    color: '#7cfc00',
    fontWeight: 'bold',
  },
  textTitle: {
    fontSize: 15,
    // color: '#7cfc00',
    color: '#ffff',
    fontWeight: 'bold',
  },
  icon: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
});

export {styles};
