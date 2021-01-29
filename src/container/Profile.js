import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleProfile';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import HeaderP from '../components/headerProfile';
import BodyProfile from '../components/bodyProfile';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      Trash: '',
      saldo: '',
      isloading: false,
    };
  }

  componentDidMount() {
    this.getTrash();
    this.getSaldo();
  }

  Refreash() {
    this.getTrash(), this.getSaldo();
  }

  getSaldo = async () => {
    this.setState({isloading: true});
    try {
      await axios({
        url: 'https://trashbag.herokuapp.com/api/saldo',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props.userData.userReducer.user}`,
        },
      })
        .then((result) => {
          console.log('Sucsess==', result.data.data);
          this.setState({
            saldo: result.data.data,
            isloading: false,
          });
        })
        .catch((error) => {
          ToastAndroid.show('Eroro Get Data', ToastAndroid.LONG);
          console.error(error);
          this.setState({
            isloading: false,
          });
        });
    } catch (eror) {
      console.log('Eror Get Data');
      ToastAndroid('Maaf Terjadi Eror ', ToastAndroid.LONG);
    }
  };

  getTrash = async () => {
    this.setState({isloading: true});
    try {
      await axios({
        url: 'https://trashbag.herokuapp.com/api/Total',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props.userData.userReducer.user}`,
        },
      })
        .then((result) => {
          console.log('Berhasil GET==', result.data);
          this.setState({
            isloading: false,
            Trash: result.data.data,
            refreash: false,
          });
        })
        .catch((err) => {
          console.log('Gagal===', err);
          this.setState({isloading: false, refreash: false});
          ToastAndroid.show('Eror Get Data', ToastAndroid.LONG);
        });
    } catch (err) {
      console.log('Gagal===', err);
      this.setState({isloading: false, refreash: false});
      ToastAndroid.show('Eror Get Data', ToastAndroid.LONG);
    }
  };

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
        </View>
      );
    }
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
                <Text>Total Saldo</Text>
                <Text>{this.state.saldo}</Text>
              </View>
              <View style={styles.inData}>
                <Text>Total Sampah</Text>
                <Text>{this.state.Trash} KG</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.Refreash()}
                style={styles.inData}>
                <Text>Total Berat</Text>
                <Text>Klik</Text>
              </TouchableOpacity>
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
