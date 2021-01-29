import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    height: '20%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    color: '#7cfc00',
    fontSize: 15,
    margin: 5,
  },
  body: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  icon: {
    height: '70%',
    width: '100%',
  },
  bottom: {
    height: '15%',
    // borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inBottom: {
    height: 50,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#5ad488ff',
  },
  Bottom: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export {styles};
