import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from '../styles/styleIntro';

class Intro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#6495ed" />
        <View style={styles.header}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.text1}>
            Please login or sign up to continue using our app
          </Text>
        </View>
        <View style={styles.body}>
          <Image
            style={styles.background}
            source={require('../assets/img/VectorTrash.png')}
          />
        </View>
        <View style={styles.pactUser}>
          <TouchableOpacity
            style={styles.login}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.text2}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}
            style={styles.signUp}>
            <Text style={styles.text3}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Intro;
