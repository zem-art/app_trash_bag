import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    height: 50,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5ad488ff',
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    height: 320,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inBody: {
    height: '60%',
    width: '70%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#5ad488ff',
  },
  bottom: {
    height: 70,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  icon: {
    height: 80,
    width: 80,
  },
  inBottom: {
    height: '70%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#5ad488ff',
    flexDirection: 'row',
  },
  input: {
    height: 50,
    width: '100%',
    // borderWidth: 1,
    paddingLeft: 10,
    marginTop: 15,
    borderRadius: 10,
    borderBottomWidth: 1,
  },
  send: {
    height: 27,
    width: 27,
    marginLeft: 20,
  },
  view: {
    height: 20,
  },
});

export {styles};
