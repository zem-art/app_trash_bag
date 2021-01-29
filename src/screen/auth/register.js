import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ToastAndroid,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import {styles} from '../../styles/styleRegister';
import Spinner from 'react-native-spinkit';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmation: '',
      mata: true,
      mata1: true,
      isloading: false,
    };
  }

  gotoLogin() {
    this.props.navigation.navigate('Login');
  }

  userRegister() {
    this.setState({isloading: true});
    axios({
      url: `https://trashbag.herokuapp.com/api/register`,
      method: 'POST',
      data: {
        nama_lengkap: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.confirmation,
      },
    })
      .then((responseJson) => {
        const {token} = responseJson.data;
        console.log('INI Email ====', responseJson.data);
        if (token === token) {
          ToastAndroid.show(
            'Akun Berhasil Mendaftar Daftar',
            ToastAndroid.LONG,
          );
          this.gotoLogin();
        }
        this.setState({
          isloading: false,
        });
      })
      .catch((eror) => {
        if (eror.response) {
          ToastAndroid.show('Maaf Data Harus Di isi', ToastAndroid.LONG);
          console.log('EROROROROROR =====', eror.response);
          this.setState({
            isloading: false,
          });
        } else {
          ToastAndroid.show(
            'Maaf Ada Kesalahan Yang Berasal Dari Kami',
            ToastAndroid.LONG,
          );
          this.setState({
            isloading: false,
          });
        }
      });
  }
  changeEye = () => {
    const eyes = !this.state.mata;
    this.setState({mata: eyes});
  };
  changeEye1 = () => {
    const eyes1 = !this.state.mata1;
    this.setState({mata1: eyes1});
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <View style={styles.header}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.text1}>Protect plants to save the earth.</Text>
        </View>

        <View style={styles.body}>
          <Image
            style={styles.icon}
            source={require('../../assets/img/Pemulung.png')}
          />
        </View>
        <ScrollView>
          <View style={styles.pathMail}>
            <Text style={styles.textEmail}>Name :</Text>
            <View style={styles.inputan}>
              <Image
                style={[styles.mail, {height: '45%'}]}
                source={require('../../assets/icon/name_Profile.png')}
              />
              <TextInput
                style={styles.input}
                placeholder="Please Enter Your Name"
                onChangeText={(name) => this.setState({name: name})}
              />
            </View>
            <Text style={styles.textEmail}>Email :</Text>
            <View style={styles.inputan}>
              <Image
                style={[styles.mail, {height: '40%'}]}
                source={require('../../assets/icon/mailGreen.png')}
              />
              <TextInput
                style={styles.input}
                placeholder="Please Enter Your Email"
                onChangeText={(email) => this.setState({email: email})}
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
                onChangeText={(password) => this.setState({password: password})}
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
            <Text style={styles.textPass}>Confirmation Password :</Text>
            <View style={styles.inputan}>
              <Image
                style={[styles.mail, {height: '50%'}]}
                source={require('../../assets/icon/keyGreen.png')}
              />
              <TextInput
                secureTextEntry={this.state.mata1}
                style={styles.input}
                placeholder="Confirmation Password"
                onChangeText={(confirmation) =>
                  this.setState({confirmation: confirmation})
                }
              />
              <TouchableOpacity
                onPress={() => this.changeEye1()}
                style={styles.pathEye}>
                <Image
                  style={styles.eye}
                  source={
                    this.state.mata1
                      ? require('../../assets/icon/hidenEye.png')
                      : require('../../assets/icon/openEyes.png')
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.pathButton}>
            <TouchableOpacity
              onPress={() => this.userRegister()}
              style={styles.button}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'white'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.textLogin}>Sign Up</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.pathRegister}>
            <Text style={styles.textSlogan}>Already have an account ? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.textRegister}> Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Register;
