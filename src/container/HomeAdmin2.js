import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../styles/styleAdmin2';

// import Screen
import Header2 from '../components/headerAdmin2';
import Horizontal2 from '../components/Horizontal2';
import Profile2 from '../components/Profile2';

export class Admin extends Component {
  render() {
    return (
      <View style={styles.containe}>
        <StatusBar backgroundColor="#5ad488ff" />
        <ScrollView>
          <View style={styles.header}>
            <Header2 navigation={this.props.navigation} />
          </View>
          <ImageBackground
            source={require('../assets/img/deposit3.jpg')}
            blurRadius={0.9}
            style={styles.profile}>
            <Profile2 navigation={this.props.navigation} />
            <Horizontal2 navigation={this.props.navigation} />
          </ImageBackground>
          <LinearGradient colors={['#5ad488ff', '#7cfc00']} style={styles.body}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Deposit')}
              style={styles.touch}>
              <Image
                style={styles.icon}
                source={require('../assets/icon/deposit1.png')}
              />
              <Text>Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.icon}
                source={require('../assets/icon/Stock.png')}
              />
              <Text>Stock</Text>
            </TouchableOpacity>
          </LinearGradient>
        </ScrollView>
      </View>
    );
  }
}

export default Admin;

//<View style={styles.PactText}>
//  <Text>Deposit</Text>
//  <Text>Here</Text>
//</View>
