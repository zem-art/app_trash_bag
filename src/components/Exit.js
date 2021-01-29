import React, {Component} from 'react';
import {Text, ToastAndroid, TouchableOpacity, Image, Alert} from 'react-native';
import {styles} from '../styles/styleProfile';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

export class Exit extends Component {
  logOuth = async () => {
    try {
      console.log('Sedang Menghapus');
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      this.props.userLogin(null);
      this.props.userImage(null);
      this.props.emailUser(null);
      this.props.nameUser(null);
      // Please Do not Edit the Comments Below    ==== later in EROROR
      // this.props.userRole(null);
      this.props.navigation.navigate('Intro');
      ToastAndroid.show('Anda Berhasil LogOut', ToastAndroid.LONG);
      console.log('Done Remove');
    } catch (error) {
      console.error('Error clearing app data.', error);
    }
  };

  Exit = () =>
    Alert.alert(
      'You LogOut',
      'Anda Mau Keluar',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('User Cancel LogOut'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.logOuth()},
      ],
      {cancelable: false},
    );

  render() {
    return (
      <>
        <TouchableOpacity
          onPress={() => this.Exit()}
          style={styles.pactbodyData}>
          <Image
            style={styles.question}
            source={require('../assets/icon/exit2.png')}
          />
          <Text>Log Out</Text>
        </TouchableOpacity>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  // send response to its redux to delete token
  return {
    userLogin: (token) => dispatch({type: 'SET_USER', payload: token}),
    // Please Do not Edit the Comments Below    ==== later in EROROR
    // userRole: (role) => dispatch({type: 'USER_ROLE', payload: role}),
    nameUser: (name) => dispatch({type: 'NAME_USER', payload: name}),
    emailUser: (email) => dispatch({type: 'EMAIL_USER', payload: email}),
    userImage: (image) => dispatch({type: 'IMAGE_USER', payload: image}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Exit);
