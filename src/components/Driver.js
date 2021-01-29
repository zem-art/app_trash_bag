import React, {Component} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleDriver';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';
import Spinner from 'react-native-spinkit';

export class Driver extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
      isloading: true,
      inputCategory: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.getCategory();
    // console.log('Ini Di Jalan kan Berapa KAsli');
  }

  gotoSuccses() {
    this.props.navigation.navigate('Succses');
  }

  getCategory = async () => {
    try {
      await axios
        .get('https://trashbag.herokuapp.com/api/jenis')
        .then((result) => {
          // console.log('Ini get Category==', result.data.data);
          this.setState({
            category: result.data.data,
            isloading: false,
          });
        })
        .catch((err) => {
          console.log('Eror GET Eror==', err);
          this.setState({
            isloading: false,
            isEror: true,
          });
        });
    } catch (eror) {
      console.error(eror);
      console.log('eror');
    }
    this.setState({
      isloading: false,
      isEror: true,
    });
  };

  sendData() {
    this.setState({loading: true});
    axios({
      url: 'https://trashbag.herokuapp.com/api/Jemput',
      method: 'POST',
      data: {
        jenis_sampah: this.state.inputCategory,
      },
      headers: {
        Authorization: `Bearer ${this.props.userData.userReducer.user}`,
      },
    })
      .then((result) => {
        console.log('Berhasil==', result.data);
        ToastAndroid.show('Sucsess Send To Driver', ToastAndroid.LONG);
        this.gotoSuccses();
        this.setState({loading: false});
      })
      .catch((err) => {
        console.log('Gagal===', err);
        ToastAndroid.show('Eroro Send To Driver', ToastAndroid.LONG);
        this.setState({loading: false});
      });
  }

  render() {
    if (this.state.isloading) {
      return (
        <View style={styles.loading}>
          <Spinner color={'blue'} size={40} type="ThreeBounce" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <LinearGradient style={styles.header} colors={['#5ad488ff', '#7cfc00']}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.icon}
              source={require('../assets/icon/Back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Back</Text>
        </LinearGradient>
        <LinearGradient
          style={styles.pactImage}
          colors={['#7cfc00', '#5ad488ff']}>
          <View style={styles.pactPhoto}>
            <Image
              style={styles.image}
              source={{uri: this.props.userData.userReducer.image}}
            />
          </View>
        </LinearGradient>
        <View style={styles.body}>
          <View style={styles.outBody}>
            <View style={styles.inBody}>
              <Text style={styles.textTitle}>Silahkan Pilih Sampah Anda ?</Text>
              <Picker
                mode="dropdown"
                selectedValue={this.state.inputCategory}
                style={styles.Picker}
                onValueChange={(itemValue) =>
                  this.setState({inputCategory: itemValue})
                }>
                {this.state.category.map((item, value) => {
                  return (
                    <Picker.Item
                      // see to font end
                      label={item.jenis_sampah}
                      // send to back end
                      value={item.id}
                    />
                  );
                })}
              </Picker>
            </View>
            <TouchableOpacity
              onPress={() => this.sendData()}
              style={styles.Bottom}>
              {this.state.loading ? (
                <Spinner
                  style={styles.loading}
                  color={'#5ad488ff'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <>
                  <Image
                    style={styles.sendIcon}
                    source={require('../assets/icon/delivery.png')}
                  />
                  <Text style={styles.textBottom}>Send To</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
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

export default connect(mapStateToProps)(Driver);
