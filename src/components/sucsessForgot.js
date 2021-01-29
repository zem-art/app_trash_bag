import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import {styles} from '../styles/styleSucsessF';

export class SuccsesF extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <View style={styles.header}>
          <Text style={styles.Title}>Mohon Cek Email Anda</Text>
          <Text style={styles.Title}>Kami Sudah Mengirimkan</Text>
          <Text style={styles.Title}>Link Untuk Ubah Password</Text>
        </View>
        <View style={styles.body}>
          <Image
            style={styles.icon}
            source={require('../assets/img/sucsess12.jpg')}
          />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Intro')}
            style={styles.inBottom}>
            <Text style={styles.Bottom}>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SuccsesF;
