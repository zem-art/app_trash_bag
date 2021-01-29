import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  RefreshControl,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../styles/styleAdmin1';
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

// Send Coding Screen
import Horizontal from '../components/Horizontal';
import Admin1 from '../components/headerAdmin1';
import HeaderUp from '../components/headerUpAdmin';

export class Driver extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isloading: false,
      refreash: false,
      isEror: false,
    };
  }
  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.GetData();
  }
  componentDidMount() {
    this.GetData();
  }
  GetData = async () => {
    this.setState({isloading: true});
    await axios
      .get('https://trashbag.herokuapp.com/api/index', {
        headers: {
          Authorization: `Bearer ${this.props.userData.userReducer.user}`,
        },
      })
      .then((result) => {
        // console.log('Ini Data == ', result.data.data);
        this.setState({
          refreash: false,
          isloading: false,
          data: result.data.data,
        });
      })
      .catch((error) => {
        // console.log('Eror Get Data== ', error);
        ToastAndroid('Eror Get Data 404 Not Found', ToastAndroid.LONG);
        this.setState({
          refreash: false,
          isloading: false,
          isEror: true,
        });
      });
  };

  render() {
    // console.log('Ini data State======', this.state.data);
    if (this.state.isloading) {
      return (
        <View style={styles.Loading1}>
          <Spinner color={'blue'} size={40} type="ThreeBounce" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    } else if (this.state.isEror) {
      return (
        <View style={styles.Loading1}>
          <Text>Maaf Terjadi Eror Saat Memuat Data</Text>
          <Text>Dan Kesalahan Dari Kami Bukan Dari Anda</Text>
          <TouchableOpacity
            style={styles.toc}
            onPress={() => this.state.onRefreash()}>
            <Text>Klik Me Untuk refreash</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreash}
              onRefresh={() => this.onRefreash()}
            />
          }>
          <View style={styles.header}>
            <HeaderUp navigation={this.props.navigation} />
          </View>
          <LinearGradient
            style={styles.buttomHeader}
            colors={['#5ad488ff', '#7cfc00']}>
            <View style={styles.pactImage}>
              <Admin1 navigation={this.props.navigation} />
            </View>
            <ScrollView horizontal style={styles.outBody}>
              <Horizontal navigation={this.props.navigation} />
            </ScrollView>
          </LinearGradient>
          <View style={styles.pactFind}>
            <Text style={styles.textFind}>Find a job</Text>
          </View>
          <View style={styles.pactBottom}>
            {this.state.data.map((item, value) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('formulirBarang', {
                      item: item,
                    })
                  }
                  style={styles.inBottom}>
                  <View style={styles.inImage}>
                    <Image
                      style={styles.imageData}
                      source={{uri: item.user.foto_profil}}
                    />
                    <View style={styles.PactName}>
                      <Text>{item.user.nama_lengkap}</Text>
                    </View>
                  </View>
                  <View style={styles.items}>
                    <Text> No : {item.id}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

export default connect(mapStateToProps)(Driver);
