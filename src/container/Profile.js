import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  // ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleProfile';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import HeaderP from '../components/headerProfile';
import BodyProfile from '../components/bodyProfile';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <LinearGradient style={styles.header} colors={['#5ad488ff', '#7cfc00']}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.pasctBack}>
            <Image
              style={styles.back}
              source={require('../assets/icon/Back.png')}
            />
          </TouchableOpacity>
          <ScrollView style={styles.scroll}>
            <HeaderP navigation={this.props.navigation} />
          </ScrollView>
          <View style={styles.pactData}>
            <View style={styles.data}>
              <View style={styles.inData}>
                <Text>Total Point</Text>
                <Text>Angka</Text>
              </View>
              <View style={styles.inData}>
                <Text>Total Sampah</Text>
                <Text>Angka</Text>
              </View>
              <View style={styles.inData}>
                <Text>Total Berat</Text>
                <Text>Angka</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.body}>
          <BodyProfile navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

export default connect(mapStateToProps)(Profile);

// const mapDispatchToProps = (dispatch) => {
//   // send response to its redux to delete token
//   return {
//     userLogin: (token) => dispatch({type: 'SET_USER', payload: token}),
//     userRole: (role) => dispatch({type: 'USER_ROLE', payload: role}),
//     nameUser: (name) => dispatch({type: 'NAME_USER', payload: name}),
//     emailUser: (email) => dispatch({type: 'EMAIL_USER', payload: email}),
//     userImage: (image) => dispatch({type: 'IMAGE_USER', payload: image}),
//   };
// };
