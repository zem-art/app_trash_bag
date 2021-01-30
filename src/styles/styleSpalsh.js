import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 30,
  },
  pathIcon: {
    // borderWidth: 1,
  },
  icon: {
    height: '75%',
    width: '75%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  pathTitle: {
    // borderWidth: 1,
    marginBottom: '5%',
    height: '10%',
  },
  textTitle1: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  version: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#a99a',
    opacity: 0.7,
  },
});

export {styles};
