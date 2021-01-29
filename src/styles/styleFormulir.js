import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '10%',
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  back: {
    height: 20,
    width: 30,
    marginRight: 10,
  },
  pactImage: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  image: {
    height: 90,
    width: 90,
    // borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  body: {
    paddingHorizontal: 20,
  },
  inBody: {
    // backgroundColor: 'yellow',
    paddingBottom: 3,
  },
  input: {
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9',
    // borderWidth: 1,
    justifyContent: 'space-between',
  },
  inputText: {
    width: '90%',
    maxWidth: '90%',
    // borderWidth: 1,
  },
  inputPact: {
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9',
    flexDirection: 'row',
  },
  pactMaps: {
    // borderWidth: 1,
    // height: '80%',
  },
  maps: {
    height: 30,
    width: 30,
  },
  patchEdit: {
    // backgroundColor: 'green',
    borderRadius: 10,
    height: 50,
    width: '100%',
    marginTop: 5,
  },
  text: {
    marginTop: 10,
  },
  color: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBottom: {
    color: '#ffff',
    fontSize: 20,
  },
  textEnd: {
    marginTop: 5,
    textAlign: 'center',
    color: '#a9a9',
  },
});

export {styles};
