import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from '../styles/styleSpalsh';
import LinearGradient from 'react-native-linear-gradient';

export class Splash extends Component {
  render() {
    return (
      <LinearGradient
        style={styles.container}
        colors={['#5ad488ff', '#7cfc00']}>
        <StatusBar backgroundColor="#5ad488ff" />
        <View style={styles.title}>
          <Text style={styles.textTitle}>Welcome</Text>
        </View>
        <View style={styles.pathIcon}>
          <LottieView
            source={require('../assets/animation/TrashSplash.json')}
            style={styles.icon}
            autoPlay
            loop
          />
        </View>
        <View style={styles.pathTitle}>
          <Text style={styles.textTitle1}>Trash Bag</Text>
        </View>
      </LinearGradient>
    );
  }
}

export default Splash;
