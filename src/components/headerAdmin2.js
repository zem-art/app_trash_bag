import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {styles} from '../styles/styleAdmin2';

export class Header2 extends Component {
  Attention() {
    Alert.alert('Maaf Layanan Ini Belum Tersedia');
  }

  render() {
    return (
      <>
        <View style={styles.inIcon}>
          <Image
            style={styles.iconT}
            source={require('../assets/icon/Trash.png')}
          />
          <Text>Trash</Text>
        </View>
        <TouchableOpacity onPress={() => this.Attention()}>
          <Image
            style={styles.history}
            source={require('../assets/icon/History.png')}
          />
        </TouchableOpacity>
      </>
    );
  }
}

export default Header2;
