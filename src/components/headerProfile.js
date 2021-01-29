import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {styles} from '../styles/styleProfile';
import {connect} from 'react-redux';
import Spinner from 'react-native-spinkit';
import AsyncStorage from '@react-native-community/async-storage';

export class HeaderP extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
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
        // console.log('Data Profile==', data.user);
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
          <TouchableOpacity
            style={{top: 20}}
            onPress={() => this.state.onRefreash()}>
            <Text>Klik Me Untuk refreash</Text>
          </TouchableOpacity>
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
        <View style={styles.pactProfile}>
          <View style={styles.pactIcon_name}>
            <View style={styles.pactIcon}>
              {this.props.userData.userReducer.image !== null ? (
                <Image
                  style={styles.iconProfile}
                  source={{uri: this.state.data.foto_profil}}
                />
              ) : (
                <Image
                  style={styles.iconProfile}
                  source={require('../assets/icon/user_circle.png')}
                />
              )}
            </View>
            <View style={styles.pathName}>
              <Text>{this.state.data.nama_lengkap}</Text>
              <Text>{this.state.data.email}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Formulir', {
                item: this.state.data,
              })
            }>
            <Image
              style={styles.edit}
              source={require('../assets/icon/White_edit1.png')}
            />
          </TouchableOpacity>
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
const mapDispatchToProps = (dispatch) => {
  return {
    userImage: (image) => dispatch({type: 'IMAGE_USER', payload: image}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderP);
