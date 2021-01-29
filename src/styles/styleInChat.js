import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: '#5ad488ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  back: {
    height: 20,
    width: 30,
    marginRight: 10,
  },
  inHeader: {
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    // borderWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    // paddingVertical: 10,
  },
  Send: {
    maxWidth: '55%',
    maxHeight: '100%',
    borderRadius: 5,
    paddingHorizontal: 5,
    justifyContent: 'center',
    margin: 5,
    // backgroundColor: '#5ad488ff',
    borderWidth: 1,
    borderColor: '#5ad488ff',
  },
  From: {
    // backgroundColor: '#5ad488ff',
    borderWidth: 1,
    borderColor: '#5ad488ff',
    maxWidth: '75%',
    maxHeight: '100%',
    borderRadius: 5,
    paddingHorizontal: 5,
    justifyContent: 'center',
    margin: 5,
    alignSelf: 'flex-end',
  },
  OutBootom: {
    marginVertical: 10,
  },
  pactBottom: {
    height: 50,
    backgroundColor: '#5ad488ff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderRadius: 10,
    maxWidth: '75%',
    paddingLeft: 10,
    // width: '75%',
    // borderWidth: 1,
    // borderBottomWidth: 1,
    // maxHeight: 40,
  },
  klik: {
    // borderWidth: 1,
    height: 40,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  iconSend: {
    height: 30,
    width: 30,
  },
  date: {
    fontSize: 13,
    color: '#a9a9',
  },
  dateSend: {
    fontSize: 13,
    color: '#a9a9',
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  Loading1: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export {styles};
