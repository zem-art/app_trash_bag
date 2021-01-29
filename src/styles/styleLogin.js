import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    width: '100%',
    // borderWidth: 1,
    height: '18%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
  text1: {
    fontSize: 15,
    color: '#a9a9a9',
  },
  body: {
    paddingHorizontal: 25,
    height: '35%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: '100%',
    width: '100%',
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
    marginTop: 10,
  },
  textPass: {
    marginTop: 20,
  },
  pathButton: {
    paddingHorizontal: 30,
  },
  button: {
    marginTop: 5,
    // height: '100%',
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 5,
  },
  loading: {
    alignSelf: 'center',
    paddingVertical: '8%',
  },
  textLogin: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFF',
  },
  pathRegister: {
    marginTop: '5%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textSlogan: {
    color: '#a9a9a9',
    fontSize: 14,
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
  forgot: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    marginVertical: 5,
    alignSelf: 'flex-end',
  },
});

export {styles};
