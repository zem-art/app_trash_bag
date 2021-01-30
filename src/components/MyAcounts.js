import React, {Component} from 'react';
import {Text, View, StatusBar, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles/styleMyAcount';
import LinearGradient from 'react-native-linear-gradient';

export class MyAcounts extends Component {
  render() {
    // console.log('Ini Data params ', this.props.route.params.item);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <LinearGradient style={styles.header} colors={['#5ad488ff', '#7cfc00']}>
          <View style={styles.pactBack}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={styles.icon}
                source={require('../assets/icon/Back.png')}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Back</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.textTitle}>MyAcounts</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.pactImage}
          colors={['#7cfc00', '#5ad488ff']}>
          <View style={styles.pactPhoto}>
            <Image
              style={styles.photo}
              source={{uri: this.props.route.params.item.foto_profil}}
            />
          </View>
        </LinearGradient>
        <View style={styles.body}>
          <View style={styles.inBody}>
            <Image
              style={styles.iconBody}
              source={require('../assets/icon/name_Profile.png')}
            />
            <View style={styles.pactBody}>
              <Text>Name : </Text>
              <Text>{this.props.route.params.item.nama_lengkap}</Text>
            </View>
          </View>
          <View style={styles.inBody}>
            <Image
              style={styles.iconBody}
              source={require('../assets/icon/mailGreen.png')}
            />
            <View style={styles.pactBody}>
              <Text>Email : </Text>
              <Text>{this.props.route.params.item.email}</Text>
            </View>
          </View>
          <View style={styles.inBody}>
            <Image
              style={styles.iconBody}
              source={require('../assets/icon/nophone.png')}
            />
            <View style={styles.pactBody}>
              <Text>No Phone : </Text>
              <Text>{this.props.route.params.item.no_telepon}</Text>
            </View>
          </View>
          <View style={styles.inBody}>
            <Image
              style={styles.iconBody}
              source={require('../assets/icon/address.png')}
            />
            <View style={styles.pactBody}>
              <Text>Address : </Text>
              <Text>{this.props.route.params.item.alamat}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default MyAcounts;
