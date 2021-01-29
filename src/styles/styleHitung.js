import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  hader: {
    backgroundColor: '#5ad488ff',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
  },
  icon: {
    height: 30,
    width: 30,
    // alignSelf: 'flex-end',
  },
  body: {
    height: 250,
    borderRadius: 10,
    margin: 30,
    marginVertical: 50,
    paddingHorizontal: 10,
    // borderWidth: 1,
  },
  image: {
    width: '70%',
    height: '80%',
  },
  pactImage: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 100,
    // borderWidth: 1,
    width: '40%',
  },
  titleinBody: {
    height: '14%',
    // borderWidth: 1,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBody: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  pactInput: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: '40%',
    marginRight: 10,
    paddingLeft: 10,
  },
  clik: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    marginTop: 10,
    height: '50%',
    borderRadius: 10,
    // backgroundColor: '#ffff',
    backgroundColor: '#7cfc00',
  },

  bottom: {
    // borderWidth: 1,
    height: 100,
    // marginTop: '10%',
    paddingHorizontal: 30,
    justifyContent: 'center',
    // backgroundColor: '#5ad488ff',
    borderRadius: 10,
  },
});

export {styles};
