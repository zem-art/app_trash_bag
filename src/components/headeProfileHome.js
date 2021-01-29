import React, {Component} from 'react';
import {
  TouchableOpacity,
  Image,
  ToastAndroid,
  View,
  ScrollView,
  RefreshControl,
  Text,
} from 'react-native';
import {styles} from '../styles/styleHome';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-spinkit';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isloading: true,
      refreash: false,
    };
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getProfile();
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile = async () => {
    await fetch('https://trashbag.herokuapp.com/api/user', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.props.userData.userReducer.user}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Data home==', data.user);
        const {foto_profil} = data.user;
        this.props.userImage(foto_profil);
        if (data) {
          let image_Key = ['image', foto_profil];
          AsyncStorage.multiSet([image_Key]).then((value) => {
            this.setState({
              image_Key: value,
              refreash: false,
              isloading: false,
              data: data.user,
            });
          });
        }
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
          ToastAndroid('Kesalahan Dari BAckEnd', ToastAndroid.LONG);
        } else {
          ToastAndroid('kamu sedang offline nih', ToastAndroid.LONG);
        }
      });
  };
  render() {
    // console.log('ini data redux==', this.props.userData.userReducer);
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
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreash}
            onRefresh={() => this.onRefreash()}
          />
        }>
        <View style={styles.header}>
          <View style={styles.pactIcon}>
            {this.props.userData.userReducer.image !== null ? (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Formulir', {
                    item: this.state.data,
                  })
                }
                style={styles.icon}>
                <Image
                  style={styles.iconImage}
                  source={{uri: this.props.userData.userReducer.image}}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Formulir', {
                    item: this.state.data,
                  })
                }
                style={styles.icon}>
                <Text>Tolong Lengkapi Profile Anda</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

// send data image to redux
// Dont forget this is
const mapDispatchToProps = (dispatch) => {
  return {
    userImage: (image) => dispatch({type: 'IMAGE_USER', payload: image}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

// if (this.state.isloading) {
//  return (
//    <View style={styles.loading}>
//      <Spinner
//        style={styles.loading}
//      color={'blue'}
//        size={40}
//        type="ThreeBounce"
//      />
//      <Text>Sedang Memuat data</Text>
//    </View>
//  );
//} else if (this.state.isEror) {
//  return (
//    <View style={styles.loading}>
//      <Text>Maaf Terjadi Eror Saat Memuat Data</Text>
//      <Text>Dan Kesalahan Dari Kami Bukan Dari Anda</Text>
//    </View>
//  );
//}
