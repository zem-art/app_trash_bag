import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import Exit from './Exit';
import Acounts from './Acounts';
import {connect} from 'react-redux';
import {styles} from '../styles/styleProfile';

export class BodyProfile extends Component {
  Atention() {
    Alert.alert('Maaf Layanan ini Belum Tersedia');
  }

  render() {
    return (
      <>
        <View style={styles.inBody}>
          <Acounts navigation={this.props.navigation} />
          <TouchableOpacity
            onPress={() => this.Atention()}
            style={styles.pactbodyData}>
            <Image
              style={styles.question}
              source={require('../assets/icon/helpCenter.png')}
            />
            <Text>Help Center</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.Atention()}
            style={styles.pactbodyData}>
            <Image
              style={styles.question}
              source={require('../assets/icon/Start3.png')}
            />
            <Text>Rating Apps</Text>
          </TouchableOpacity>
          <Exit navigation={this.props.navigation} />
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

export default connect(mapStateToProps)(BodyProfile);

// onPress={() => console.log(this.props.userData.userReducer)}
