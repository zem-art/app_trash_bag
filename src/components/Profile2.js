import React, {Component} from 'react';
import {
  Text,
  View,
  ToastAndroid,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {styles} from '../styles/styleAdmin2';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-spinkit';
import {ScrollView} from 'react-native-gesture-handler';

export class Profile2 extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isloading: true,
      refreash: false,
    };
  }

  // onRefreash() {
  //   this.setState({
  //     refreash: true,
  //   });
  //   this.getProfile();
  // }

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
    if (this.state.isloading) {
      return (
        <View style={styles.loading}>
          <Spinner
            style={styles.loading1}
            color={'blue'}
            size={40}
            type="ThreeBounce"
          />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    }
    return (
      <>
        <View style={styles.inProfile}>
          <View style={styles.inIcon}>
            <Image
              style={styles.iconImage}
              source={{uri: this.props.userData.userReducer.image}}
            />
            <Text> {this.props.userData.userReducer.name}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Formulir', {
                item: this.state.data,
              })
            }>
            <Image
              style={styles.iconLeft}
              source={require('../assets/icon/left.png')}
            />
          </TouchableOpacity>
        </View>
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
  return {
    userImage: (image) => dispatch({type: 'IMAGE_USER', payload: image}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile2);
