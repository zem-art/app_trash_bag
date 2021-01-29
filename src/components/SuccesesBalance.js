import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, StatusBar} from 'react-native';
import {styles} from '../styles/styleAdminS';
import LinearGradient from 'react-native-linear-gradient';

export class SuccesesBalance extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <View style={styles.header}>
          <Text style={styles.textTitle}>Terimakasih</Text>
          <Text style={styles.textTItle}>Anda Telah Membantu Kami</Text>
          <Text style={styles.textTItle}>Menyelamatkan Dunia</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.pactImage}>
            <Image
              style={styles.image}
              source={require('../assets/img/sucsees.jpg')}
            />
          </View>
        </View>
        <View style={styles.pactBottom}>
          <TouchableOpacity
            style={styles.clik}
            onPress={() => this.props.navigation.navigate('Driver')}>
            <LinearGradient
              style={styles.clik1}
              colors={['#5ad488ff', '#7cfc00']}>
              <Text style={styles.text}>Go to Home</Text>
              <Image
                style={styles.iconHome}
                source={require('../assets/icon/green_house-512.png')}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SuccesesBalance;
