import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import {styles} from '../styles/styleHistoryS';
import Spinner from 'react-native-spinkit';
import axios from 'axios';
import {connect} from 'react-redux';

export class HistoryS extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
      isloading: false,
      refreash: false,
      isEror: false,
    };
  }

  componentDidMount() {
    this.getDataHistory();
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getDataHistory();
  }
  getDataHistory = async () => {
    this.setState({isloading: true, isEror: true});
    try {
      await axios({
        url: 'https://trashbag.herokuapp.com/api/historySampah',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props.userData.userReducer.user}`,
        },
      })
        .then((result) => {
          console.log('Sucsess Get History==', result.data.data);
          this.setState({
            Data: result.data.data,
            refreash: false,
            isloading: false,
            isEror: false,
          });
        })
        .catch((error) => {
          ToastAndroid.show('Eroro Get Data', ToastAndroid.LONG);
          console.error(error);
          this.setState({
            refreash: false,
            isloading: false,
            isEror: true,
          });
        });
    } catch (eror) {
      console.log('Eror Get Data');
      ToastAndroid('Maaf Terjadi Eror ', ToastAndroid.LONG);
      this.setState({
        refreash: false,
        isloading: false,
        isEror: true,
      });
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
          <TouchableOpacity
            style={styles.toc}
            onPress={() => this.onRefreash()}>
            <Text>Klik Me Untuk refreash</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../assets/icon/Back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.Title}>History</Text>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreash}
              onRefresh={() => this.onRefreash()}
            />
          }>
          <View style={styles.data}>
            {this.state.Data.map((item, value) => {
              return (
                <View style={styles.inData}>
                  <View style={styles.no}>
                    <Text style={styles.textData}>No Barang</Text>
                    <Text>{item.id}</Text>
                  </View>
                  <View style={styles.no}>
                    <Text style={styles.textData}>Berat Barang : </Text>
                    <Text>{item.berat}</Text>
                    <Text style={styles.textData}>Saldo : {item.saldo}</Text>
                  </View>
                  <View style={styles.no}>
                    <Text style={styles.textData}>Jenis : </Text>
                    <Text>{item.jenis.jenis_sampah}</Text>
                    <Text style={styles.textData}>
                      Harga : {item.jenis.harga}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.bottom} />
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

export default connect(mapStateToProps)(HistoryS);
