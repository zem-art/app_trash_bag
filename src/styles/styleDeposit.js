import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#5ad488ff',
  },
  header: {
    height: '10%',
    backgroundColor: '#5ad488ff',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    // borderWidth: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ffff',
  },
  back: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    height: 310,
  },
  inBody: {
    height: '70%',
    width: '75%',
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    // borderWidth: 1,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Picker: {
    height: 50,
    width: 110,
    marginTop: 15,
  },
  input: {
    marginTop: 10,
    backgroundColor: '#5ad488ff',
    width: '100%',
    borderRadius: 10,
    paddingLeft: 10,
  },
  TextTitle: {
    marginTop: 10,
    fontSize: 14,
    color: '#5ad488ff',
  },
  Klik: {
    backgroundColor: '#ffffff',
    height: '15%',
    // borderWidth: 1,
    marginTop: 10,
    width: '75%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sendIcon: {
    height: 30,
    width: 40,
    marginRight: 20,
  },
});

export {styles};
