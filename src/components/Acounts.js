import React, {Component} from 'react';
import {Text, TouchableOpacity, Image, ToastAndroid, View} from 'react-native';
import {styles} from '../styles/styleProfile';
// import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-spinkit';
import {connect} from 'react-redux';

export class Acounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isloading: true,
      refreash: false,
    };
  }

  componentDidMount() {
    this.getProfile();
  }

  // ComponentDidUpdate() {
  //  if
  // }
  getProfile = async () => {
    await fetch('https://trashbag.herokuapp.com/api/user', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.props.userData.userReducer.user}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data Profile==', data.user);
        this.setState({
          refreash: false,
          isloading: false,
          data: data.user,
        });
      })
      .catch((err) => {
        this.setState({
          refreash: false,
          isloading: false,
          isEror: true,
        });
        if (err.response) {
          ToastAndroid('Kesalahan Dari BackEnd', ToastAndroid.LONG);
        } else {
          ToastAndroid('kamu sedang offline nih', ToastAndroid.LONG);
        }
      });
  };
  render() {
    if (this.state.isloading) {
      return (
        <View style={styles.loading}>
          <Spinner
            style={styles.loading}
            color={'blue'}
            size={40}
            type="ThreeBounce"
          />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    } else if (this.state.isEror) {
      return (
        <View style={styles.loading}>
          <Text>Maaf Terjadi Eror Saat Memuat Data</Text>
          <Text>Dan Kesalahan Dari Kami Bukan Dari Anda</Text>
        </View>
      );
    }
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('MyAcounts', {
              item: this.state.data,
            })
          }
          style={styles.pactbodyData}>
          <Image
            style={styles.question}
            source={require('../assets/icon/Question.png')}
          />
          <Text>My Account</Text>
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

export default connect(mapStateToProps)(Acounts);
