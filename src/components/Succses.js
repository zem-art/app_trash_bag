import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, StatusBar} from 'react-native';

import {styles} from '../styles/styleSuccses';

export class Succses extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          // backgroundColor="#7fff00"
          backgroundColor="#5ad488ff"
        />
        <View style={styles.header}>
          <Text style={styles.title}>Permintaan Anda Berhasil Terkirim</Text>
          <Text style={styles.text}>Driver Akan Menuju ke Alamat Anda</Text>
          <Text style={styles.text}>Harap di Mohon Untuk Menunggu Nya</Text>
        </View>
        <View style={styles.pactImage}>
          <View style={styles.inIcon}>
            <Image
              style={styles.icon}
              source={require('../assets/icon/deliverySend.png')}
            />
          </View>
        </View>
        <View style={styles.Bottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.inBottom}>
            <Text style={styles.textBottom}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Succses;
