import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar,
  Image,
  ToastAndroid,
} from 'react-native';

import {styles} from '../../styles/styleForgot';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export class Forgot extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      isloading: false,
    };
  }

  goTo() {
    this.props.navigation.navigate('ForgotS');
  }

  sendEmail = async () => {
    this.setState({isloading: true});
    axios
      .post('https://trashbag.herokuapp.com/api/password/email', {
        email: this.state.email,
      })
      .then((result) => {
        console.log('ini respon===', result.data);
        ToastAndroid.show('Permintaan berhasil Terkirim ', ToastAndroid.LONG);
        this.setState({
          isloading: false,
        });
        this.goTo();
      })
      .catch((err) => {
        console.log('ErrorrSend Data=== ', err);
        ToastAndroid.show('Email Anda Tidak Ditemukan', ToastAndroid.LONG);
        this.setState({
          isloading: false,
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <View style={styles.header}>
          <Text style={styles.Title}> Forgot Password </Text>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.inBody}>
              <View>
                <Image
                  style={styles.icon}
                  source={require('../../assets/icon/forgot_password.png')}
                />
              </View>
              <Text>Please Enter Your Email</Text>
              <TextInput
                onChangeText={(email) => {
                  this.setState({
                    email: email,
                  });
                }}
                style={styles.input}
                placeholder="Enter Your Email"
              />
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={() => this.sendEmail()}
              style={styles.inBottom}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'white'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <>
                  <Text>Send</Text>
                  <Image
                    style={styles.send}
                    source={require('../../assets/icon/send121.png')}
                  />
                </>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.view} />
        </ScrollView>
      </View>
    );
  }
}

export default Forgot;
