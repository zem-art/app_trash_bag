import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '10%',
    backgroundColor: 'green',
    flexDirection: 'row',
    alignContent: 'space-between',
    paddingHorizontal: '5%',
  },
  pactBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: '7%',
  },
  title: {
    marginLeft: '10%',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 20,
    color: '#Ffffff',
  },
  pactImage: {
    height: '20%',
    width: '100%',
  },
  pactPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    height: '90%',
    width: '25%',
    borderRadius: 10,
  },
  body: {
    // backgroundColor: 'yellow',
    paddingHorizontal: '5%',
  },
  inBody: {
    marginVertical: '3%',
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9',
  },
  iconBody: {
    height: 30,
    width: 30,
  },
  pactBody: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {styles};
