import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  StatusBar,
} from 'react-native';
import {styles} from '../../styles/styleLogin';
import axios from 'axios';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-spinkit';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      mata: true,
      email: '',
      password: '',
      isloading: false,
    };
  }

  userLogin = async () => {
    this.setState({isloading: true});
    try {
      axios
        .post('https://trashbag.herokuapp.com/api/login', {
          email: this.state.email,
          password: this.state.password,
        })
        .then((responseJson) => {
          // console.log(this.state.email, 'ini Email');
          // console.log(this.state.password, 'ini password');
          const {token} = responseJson.data;
          // console.log('INI Token====', token);
          const {role} = responseJson.data;
          // console.log('INI ROLE====', role);
          const {nama_lengkap} = responseJson.data;
          // console.log('Ini Name ==', nama_lengkap);
          const {email} = responseJson.data;
          // // // send to redux
          this.props.userRole(role);
          this.props.userLogin(token);
          this.props.nameUser(nama_lengkap);
          this.props.emailUser(email);
          if (
            token !== null &&
            role !== null &&
            nama_lengkap !== null &&
            email !== null
          ) {
            ToastAndroid.show('Anda Berhasil Login', ToastAndroid.LONG);
            // create varibale token,role,name,email
            const token_Key = ['token', token];
            // // data role int
            // // js don't reading int
            const role_Key = ['role', JSON.stringify(role)];
            const name_Key = ['name', nama_lengkap];
            const email_Key = ['email', email];
            // save to asynstore
            console.log('Sedang Menyimpan');
            AsyncStorage.multiSet([
              token_Key,
              role_Key,
              name_Key,
              email_Key,
            ]).then((value) => {
              this.setState({
                token_Key: value,
                role_Key: value,
                name_Key: value,
                email: value,
              });
              console.log('Save Done');
            });
            this.setState({
              isloading: false,
            });
          }
        })
        .catch((eror) => {
          ToastAndroid.show('Email Atau Password Salah', ToastAndroid.LONG);
          console.log('Erororo', eror);
          this.setState({
            isloading: false,
          });
        });
    } catch (eror) {
      this.setState({isloading: false});
      if (eror.response) {
        ToastAndroid.show(
          'Maaf Terjadi Kesalahan Dari Kami',
          ToastAndroid.LONG,
        );
        console.log('Erororr ', eror.response.data);
      }
    }
  };
  changeEye = () => {
    const eyes = !this.state.mata;
    this.setState({mata: eyes});
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <View style={styles.header}>
          <Text style={styles.title}>Login Now</Text>
          <Text style={styles.text1}>
            The legacy for the future is green forests.
          </Text>
        </View>
        <View style={styles.body}>
          <Image
            style={styles.icon}
            source={require('../../assets/img/Welcome.png')}
          />
        </View>
        <ScrollView>
          <View style={styles.pathMail}>
            <Text style={styles.textEmail}>Email :</Text>
            <View style={styles.inputan}>
              <Image
                style={[styles.mail, {height: '40%'}]}
                source={require('../../assets/icon/mailGreen.png')}
              />
              <TextInput
                style={styles.input}
                placeholder="Please Enter Your Email"
                onChangeText={(email) => {
                  this.setState({
                    email: email,
                  });
                }}
              />
            </View>
            <Text style={styles.textPass}>Password :</Text>
            <View style={styles.inputan}>
              <Image
                style={[styles.mail, {height: '50%'}]}
                source={require('../../assets/icon/keyGreen.png')}
              />
              <TextInput
                secureTextEntry={this.state.mata}
                style={styles.input}
                placeholder="Please Enter Your Password"
                onChangeText={(password) =>
                  this.setState({
                    password: password,
                  })
                }
              />
              <TouchableOpacity
                onPress={() => this.changeEye()}
                style={styles.pathEye}>
                <Image
                  style={styles.eye}
                  source={
                    this.state.mata
                      ? require('../../assets/icon/hidenEye.png')
                      : require('../../assets/icon/openEyes.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Forgot')}
              style={styles.forgot}>
              <Text style={styles.textSlogan}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.pathButton}>
            <TouchableOpacity
              onPress={() => this.userLogin()}
              style={styles.button}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'white'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.textLogin}>Login</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.pathRegister}>
            <Text style={styles.textSlogan}>You don 't have an account ? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.textRegister}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
// // send token and role to redux
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (token) => dispatch({type: 'SET_USER', payload: token}),
    userRole: (role) => dispatch({type: 'USER_ROLE', payload: role}),
    nameUser: (name) => dispatch({type: 'NAME_USER', payload: name}),
    emailUser: (email) => dispatch({type: 'EMAIL_USER', payload: email}),
  };
};

export default connect(null, mapDispatchToProps)(Login);
