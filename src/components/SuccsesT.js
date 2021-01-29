import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from '../styles/styleSuccses2';

export class SuccsesT extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <View style={styles.header}>
          <Text style={styles.textTitle}>Terimakasih Sudah</Text>
          <Text style={styles.textTitle}>Menyelamatkan Bumi</Text>
        </View>
        <View style={styles.body}>
          <Image
            style={{height: '70%', width: '70%'}}
            source={require('../assets/img/sucsess-remo.png')}
          />
        </View>
        <TouchableOpacity
          style={styles.klik}
          onPress={() => this.props.navigation.navigate('Admin2')}>
          <View style={styles.bottom}>
            <Text style={styles.textKlik}>Go to</Text>
            <Image
              style={styles.icon}
              source={require('../assets/icon/green_house-512.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SuccsesT;
