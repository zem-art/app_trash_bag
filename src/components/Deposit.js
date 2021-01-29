import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ToastAndroid,
  TextInput,
} from 'react-native';
import {styles} from '../styles/styleDeposit';
import {Picker} from '@react-native-picker/picker';
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';

export class Deposit extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
      isloading: true,
      inputCategory: '',
      loading: false,
      Weight: '',
    };
  }

  componentDidMount() {
    this.getCategory();
    // console.log('Ini Di Jalan kan Berapa KAsli');
  }

  gotoSuccses() {
    this.props.navigation.navigate('Succses2');
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
          console.log('Eror This Eror==', err);
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
      url: 'https://trashbag.herokuapp.com/api/Jual',
      method: 'POST',
      data: {
        jenis: this.state.inputCategory,
        berat: this.state.Weight,
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
      <LinearGradient
        colors={['#5ad488ff', '#7cfc00']}
        style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../assets/icon/Back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Deposit</Text>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.inBody}>
              <Text style={styles.TextTitle}>Silahkan Masukan Sampah Anda</Text>
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
              <Text style={styles.TextTitle}>Masukan Berat Sampah</Text>
              <TextInput
                onChangeText={(Weight) =>
                  this.setState({
                    Weight: Weight,
                  })
                }
                style={styles.input}
                placeholder="Number"
                keyboardType="number-pad"
              />
            </View>
            <TouchableOpacity
              onPress={() => this.sendData()}
              style={styles.Klik}>
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
        </ScrollView>
      </LinearGradient>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

export default connect(mapStateToProps)(Deposit);
