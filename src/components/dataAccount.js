import React, {Component} from 'react';
import {Text, View, ToastAndroid} from 'react-native';
import {styles} from '../styles/styleHome';
import axios from 'axios';
import {connect} from 'react-redux';
import Spinner from 'react-native-spinkit';

export class DataAccount extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isloading: false,
    };
    // console.log('ini data State==', this.state.data);
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({isloading: true});
    try {
      axios
        .get('https://trashbag.herokuapp.com/api/saldo', {
          headers: {
            Authorization: `Bearer ${this.props.userData.userReducer.user}`,
          },
        })
        .then((result) => {
          // console.log('Sucsess==', result.data);
          this.setState({
            data: result.data,
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
  render() {
    if (this.state.isloading) {
      return (
        <View style={styles.loading2}>
          <Spinner color={'blue'} size={40} type="ThreeBounce" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    }
    // console.log('Ini Data State===', this.state.data);
    return (
      <>
        <View style={styles.data}>
          <Text style={styles.textData}>Saldo</Text>
          <Text>{this.state.data.data}</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.textData}>Saldo</Text>
          <Text>{this.state.data.data}</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.textData}>Saldo</Text>
          <Text>{this.state.data.data}</Text>
        </View>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

export default connect(mapStateToProps)(DataAccount);
