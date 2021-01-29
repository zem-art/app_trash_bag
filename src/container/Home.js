import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  RefreshControl,
  ToastAndroid,
  StatusBar,
  Alert,
} from 'react-native';

import {connect} from 'react-redux';
import {styles} from '../styles/styleHome';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/headeProfileHome';
import DataAccount from '../components/dataAccount';
import Spinner from 'react-native-spinkit';

export class Home extends Component {
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
    this.getData();
  }

  componentDidMount() {
    this.getData();
    // console.log('Jalan Berapa KAli');
  }

  getData = async () => {
    this.setState({isloading: true});
    await axios
      .get('https://trashbag.herokuapp.com/api/history', {
        headers: {
          Authorization: `Bearer ${this.props.userData.userReducer.user}`,
        },
      })
      .then((result) => {
        // console.log('Sucsess==', result.data.data);
        this.setState({
          data: result.data.data,
          isloading: false,
          refreash: false,
        });
      })
      .catch((error) => {
        ToastAndroid.show('Eroro 404 not found', ToastAndroid.LONG);
        console.error(error);
        this.setState({
          isloading: false,
          refreash: false,
        });
      });
  };

  Atention() {
    Alert.alert('Maaf Layanan ini Belum Tersedia');
  }

  render() {
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
    // console.log('Ini Data State', this.state.data);
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
          <LinearGradient
            style={styles.backgourndHeader}
            colors={['#5ad488ff', '#7cfc00']}>
            <ImageBackground
              source={require('../assets/img/background.png')}
              style={styles.backgourndHeader}
              blurRadius={0}>
              <View>
                <Header navigation={this.props.navigation} />
              </View>
            </ImageBackground>
          </LinearGradient>
          <View style={styles.body}>
            <View style={styles.welcome}>
              <Text>How are you {this.props.userData.userReducer.name} ?</Text>
            </View>
            {this.props.userData.userReducer.image !== null ? (
              <>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Category')}
                  style={styles.order}>
                  <LinearGradient
                    style={styles.color}
                    colors={['#87ceeb', '#7cfc00']}>
                    <Image
                      style={styles.iconOrder}
                      source={require('../assets/icon/Order.png')}
                    />
                    <Text style={styles.text}>Jemput Sampah</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </>
            ) : (
              <Text style={styles.textAtention}>
                Tolong Lengkapi Profile Anda
              </Text>
            )}
            <Text style={styles.text4}>Account :</Text>
            <ScrollView horizontal>
              <DataAccount navigation={this.props.navigation} />
            </ScrollView>
          </View>
          <View style={styles.buttom}>
            <View style={styles.order1}>
              <LinearGradient
                style={styles.color1}
                colors={['#87ceeb', '#7cfc00']}>
                <Text style={styles.text}>History</Text>
              </LinearGradient>
            </View>
            <TouchableOpacity
              onPress={() => this.Atention()}
              style={styles.see}>
              <Text style={styles.text5}>Lihat Semua</Text>
            </TouchableOpacity>
            {this.state.data.map((item, value) => (
              <>
                <TouchableOpacity style={styles.pactHistori}>
                  <View>
                    <Text>{item.jenis.jenis_sampah}</Text>
                    <Text style={styles.text3}>{item.created_at}</Text>
                  </View>
                  <View>
                    <Text style={styles.text3}>Total Pemesanan</Text>
                    <Text>{item.saldo}</Text>
                  </View>
                </TouchableOpacity>
              </>
            ))}
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

export default connect(mapStateToProps)(Home);

// <TouchableOpacity onPress={() => console.log(this.props.userData.userReducer)}>
//   <Text>Klik Data Redux</Text>
// </TouchableOpacity>
