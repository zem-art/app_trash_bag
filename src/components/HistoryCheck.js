import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import {connect} from 'react-redux';
import {styles} from '../styles/styleHistoryC';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export class HistoryCheck extends Component {
  constructor() {
    super();
    this.state = {
      history: [],
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
        url: 'https://trashbag.herokuapp.com/api/historyBeratSampah',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props.userData.userReducer.user}`,
        },
      })
        .then((result) => {
          console.log('Sucsess Get History==', result.data.data);
          this.setState({
            history: result.data.data,
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
          <Text style={styles.Title}>History Check Sampah</Text>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreash}
              onRefresh={() => this.onRefreash()}
            />
          }>
          <View style={styles.body}>
            {this.state.history.map((item, value) => {
              return (
                <View style={styles.Data}>
                  <View>
                    <Text>No Barang : {item.jenis_id}</Text>
                    <Text>Berat : {item.berat}</Text>
                  </View>
                  <View>
                    <Text>Type : {item.jenis.jenis_sampah}</Text>
                    <Text>Price : {item.jenis.harga}</Text>
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

export default connect(mapStateToProps)(HistoryCheck);
