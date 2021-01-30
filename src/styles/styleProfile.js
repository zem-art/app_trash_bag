import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  header: {
    width: '100%',
    height: '50%',
    // borderWidth: 1,
  },
  pasctBack: {
    // width: '100%',
    maxWidth: '20%',
    height: '15%',
    // borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  back: {
    height: 20,
    width: 30,
  },
  pactProfile: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 85,
    // borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  pactIcon: {
    // borderRadius: 50,
    // borderWidth: 1,
    marginRight: 15,
  },
  iconProfile: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  scroll: {
    // borderWidth: 1,
    height: 40,
  },
  pactData: {
    height: '50%',
    // borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  edit: {
    height: 20,
    width: 20,
  },
  pathName: {
    // borderWidth: 1,
    padding: 5,
  },
  pactIcon_name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  data: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    // marginHorizontal: 20,
    // borderWidth: 1,
    height: '70%',
  },
  outData: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    opacity: 0.6,
  },
  iconRefrash: {
    height: 20,
    width: 20,
  },
  inData: {
    // borderWidth: 1,
    borderRadius: 10,
    height: '85%',
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  refreash: {
    height: '20%',
    width: '10%',
    // borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 5,
  },
  body: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  inBody: {
    backgroundColor: '#fff',
    elevation: 10,
    height: '65%',
    width: '100%',
    borderRadius: 10,
    padding: 10,
  },
  pactbodyData: {
    // borderWidth: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9',
    paddingBottom: 7,
    marginVertical: 7,
  },
  question: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  loading: {
    alignSelf: 'center',
  },
  headerA: {
    height: 140,
    paddingTop: 30,
  },
  pasctBackA: {
    marginLeft: 15,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    flexDirection: 'row',
    // borderWidth: 1,
  },
  backA: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  Loading1: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export {styles};
