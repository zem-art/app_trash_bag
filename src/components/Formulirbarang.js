import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import {styles} from '../styles/styleFormulirB';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import {ScrollView} from 'react-native-gesture-handler';

export class FormulirA extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      // ID USER
      id: item.user.id,
      // ID BARANG
      no: item.jenis.id,
      // ID Setoran
      idB: item.id,

      name: item.user.nama_lengkap,
      noPhone: item.user.no_telepon,
      address: item.user.alamat,
      type: item.jenis.jenis_sampah,
      price: item.jenis.harga,
      isloading: false,
    };
    // console.log('ini ID== ', this.state.idB);
  }

  goTo() {
    this.props.navigation.navigate('Hitung', {
      item: this.state,
    });
  }

  sendData() {
    this.setState({isloading: true});
    axios({
      url: `https://trashbag.herokuapp.com/api/updateJemput/${this.state.idB}`,
      method: 'POST',
      data: {
        _method: 'PATCH',
      },
      headers: {
        Authorization: `Bearer ${this.props.userData.userReducer.user}`,
      },
    })
      .then((result) => {
        // console.log('Berhasil DI AMBIL JOB==', result.data);
        ToastAndroid.show('Sucsess Take A Job', ToastAndroid.LONG);
        this.goTo();
        this.setState({isloading: false});
      })
      .catch((err) => {
        console.log('Gagal===', err);
        ToastAndroid.show('Data Eror Take ', ToastAndroid.LONG);
        this.setState({isloading: false});
      });
  }

  render() {
    // console.log('Ini Data Params== ', this.props.route.params.item.user.id);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.icon}
              source={require('../assets/icon/Back.png')}
            />
          </TouchableOpacity>
          <Text>Back</Text>
        </View>
        <View style={styles.pactImage}>
          <View style={styles.inImage}>
            <Image
              style={styles.image}
              source={{uri: this.props.route.params.item.user.foto_profil}}
            />
          </View>
        </View>
        <ScrollView style={styles.body}>
          <View style={styles.inbody}>
            <View style={styles.data}>
              <Text>No : </Text>
              <Text style={styles.inData}> {this.state.no}</Text>
            </View>
            <View style={styles.data}>
              <Text>Name : </Text>
              <Text style={styles.inData}> {this.state.name}</Text>
            </View>
            <View style={styles.data}>
              <Text>Jenis Sampah : </Text>
              <Text style={styles.inData}> {this.state.type}</Text>
            </View>
            <View style={styles.data}>
              <Text>Harga : </Text>
              <Text style={styles.inData}> {this.state.price}</Text>
            </View>
            <View style={styles.data}>
              <Text>Addres : </Text>
              <Text style={styles.inData}>{this.state.address}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.sendData()}>
            <LinearGradient
              style={styles.klik}
              colors={['#5ad488ff', '#7cfc00']}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'white'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.textBootom}>Take a Job</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
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

export default connect(mapStateToProps)(FormulirA);
