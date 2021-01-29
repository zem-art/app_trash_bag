import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    backgroundColor: '#5ad488ff',
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  back: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  Title: {
    fontSize: 20,
    color: '#ffff',
    marginLeft: 30,
  },
  body: {
    paddingHorizontal: 20,
    // borderWidth: 1,
  },
  Data: {
    borderWidth: 1,
    borderColor: '#5ad488ff',
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  Loading1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: 20,
  },
});

export {styles};
