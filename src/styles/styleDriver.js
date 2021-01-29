import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '10%',
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  icon: {
    height: 30,
    width: 30,
  },
  text: {
    fontSize: 20,
    marginLeft: 5,
  },
  pactImage: {
    height: '30%',
    width: '100%',
  },
  pactPhoto: {
    height: '70%',
    width: '30%',
    alignSelf: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  body: {
    flex: 1,
    backgroundColor: '#5ad488ff',
  },
  outBody: {
    paddingHorizontal: 30,
  },
  inBody: {
    backgroundColor: '#ffff',
    width: '100%',
    height: 120,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 10,
  },
  Bottom: {
    marginTop: 20,
    backgroundColor: '#ffff',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textBottom: {
    fontSize: 20,
    color: '#7cfc00',
    fontWeight: 'bold',
  },
  sendIcon: {
    height: 30,
    width: 40,
    marginRight: 20,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Picker: {
    height: 50,
    width: 180,
    marginTop: 15,
  },
  textTitle: {
    fontSize: 15,
    color: '#7cfc00',
    fontWeight: 'bold',
  },
});

export {styles};
