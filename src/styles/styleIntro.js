import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: '20%',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 15,
    marginTop: '5%',
    color: '#696969',
  },
  body: {
    alignItems: 'center',
    // borderWidth: 1,
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    backgroundColor: '#ffffff',
    // borderWidth: 1,
    // paddingHorizontal: 10,
  },
  background: {
    height: '85%',
    width: '100%',
    borderRadius: 10,
    // borderWidth: 1,
  },
  pactUser: {
    // flex: 1,
    // borderWidth: 1,
    paddingHorizontal: '10%',
    marginTop: '5%',
  },
  login: {
    height: '19%',
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    borderRadius: 5,
    backgroundColor: '#6495ed',
  },
  signUp: {
    height: '19%',
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#00ff00',
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  text3: {
    color: '#00ff00',
  },
});

export {styles};
