import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../styles/styleHitung';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {connect} from 'react-redux';
import Spinner from 'react-native-spinkit';

export class Hitung extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      id: item.id,
      idB: item.idB,
      data: {},
      weight: '',
      isloading: false,
    };
    // console.log('Ini DAta State====', this.state.idB);
  }

  SuccsesGoto() {
    this.props.navigation.navigate('Total', {
      item: this.state.data,
    });
  }

  sendData() {
    this.setState({isloading: true});
    axios({
      url: `https://trashbag.herokuapp.com/api/jumlahJemput/${this.state.idB}`,
      method: 'POST',
      data: {
        berat: this.state.weight,
        _method: 'PATCH',
      },
      headers: {
        Authorization: `Bearer ${this.props.userData.userReducer.user}`,
      },
    })
      .then((result) => {
        // console.log('Berhasil Di Hitung==', result.data.data);
        ToastAndroid.show('Sucsess Add', ToastAndroid.LONG);
        this.setState({
          isloading: false,
          data: result.data.data,
        });
        this.SuccsesGoto();
      })
      .catch((err) => {
        console.log('Gagal===', err);
        ToastAndroid.show('Data Eror Send', ToastAndroid.LONG);
        this.setState({isloading: false});
      });
    // this.setState({isloading: false});
  }
  render() {
    // console.log('Ini Data redux== ', this.props.userData.userReducer.user);
    // console.log('Ini Id Params', this.props.route.params);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <View style={styles.hader}>
          <Text style={styles.titleBody}>Balance</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Personal', {
                item: this.state.id,
              })
            }>
            <Image
              style={styles.icon}
              source={require('../assets/icon/Chat.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <LinearGradient colors={['#5ad488ff', '#7cfc00']} style={styles.body}>
            <View style={styles.pactImage}>
              <Image
                style={styles.image}
                source={require('../assets/icon/balance.png')}
              />
            </View>
            <View style={styles.titleinBody}>
              <Text style={styles.titleBody}>Hitung Berat Sampah</Text>
            </View>
            <View style={styles.pactInput}>
              <TextInput
                onChangeText={(weight) => {
                  this.setState({
                    weight: weight,
                  });
                }}
                style={styles.input}
                keyboardType="number-pad"
                placeholder="Count Trash"
                value={this.state.weight}
              />
              <Text>KG</Text>
            </View>
          </LinearGradient>
          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={() => this.sendData()}
              style={styles.clik}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'white'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.titleBody}>Send</Text>
              )}
            </TouchableOpacity>
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

export default connect(mapStateToProps)(Hitung);
