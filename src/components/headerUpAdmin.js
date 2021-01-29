import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {styles} from '../styles/styleAdmin1';
import {connect} from 'react-redux';

export class HeaderUp extends Component {
  Attention() {
    Alert.alert('Maaf Layanan Ini Belum Tersedia');
  }
  render() {
    return (
      <>
        <View style={styles.pactIcon}>
          <Image
            style={styles.icon}
            source={require('../assets/icon/Trash.png')}
          />
          <Text>Trash Bag</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.Attention()}
          style={styles.endIcon}>
          <Image
            style={styles.icon1}
            source={require('../assets/icon/History.png')}
          />
        </TouchableOpacity>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

export default connect(mapStateToProps)(HeaderUp);
// onPress={() => this.props.navigation.navigate('Maps')}
