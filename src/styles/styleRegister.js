import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loading: {
    alignSelf: 'center',
    paddingVertical: '8%',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    width: '100%',
    // borderWidth: 1,
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 5,
  },
  text1: {
    fontSize: 15,
    color: '#a9a9a9',
  },
  body: {
    width: '100%',
    height: '30%',
    // flex: 1,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: '100%',
    width: '80%',
  },
  pathMail: {
    paddingHorizontal: 20,
    width: '90%',
    alignSelf: 'center',
    // borderWidth: 1,
  },
  inputan: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#228b22',
  },
  input: {
    width: '75%',
    // borderRightWidth: 1,
  },
  mail: {
    width: '10%',
    right: '5%',
    top: '5%',
  },

  textEmail: {
    marginTop: 2,
  },
  textPass: {
    marginTop: 5,
  },
  pathButton: {
    paddingHorizontal: 30,
  },
  button: {
    marginTop: 10,
    // height: '100%',
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 5,
  },
  textLogin: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFF',
  },
  pathRegister: {
    marginTop: '3%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textSlogan: {
    color: '#a9a9a9',
  },
  textRegister: {
    // color: '#0000ff',
    color: '#228b22',
  },
  pathEye: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  eye: {
    height: 25,
    width: 25,
  },
});

export {styles};
