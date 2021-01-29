import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    backgroundColor: '#5ad488ff',
  },
  Title: {
    fontSize: 20,
    color: '#ffff',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
    // borderWidth: 1,
  },
  inbody: {
    backgroundColor: '#5ad488ff',
    borderRadius: 10,
    height: 80,
    width: '100%',
    // borderWidth: 1,
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    marginBottom: 10,
  },
  Image: {
    height: 60,
    width: 60,
    // borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
  },
  icon: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  Loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export {styles};
