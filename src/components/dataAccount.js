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
      saldo: [],
      isloading: false,
    };
    // console.log('ini data State==', this.state.data);
  }

  componentDidMount() {
    this.getSaldo();
  }

  getSaldo = async () => {
    this.setState({isloading: true});
    try {
      await axios({
        url: 'https://trashbag.herokuapp.com/api/historySaldo',
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
        {this.state.saldo.map((item, value) => {
          return (
            <View style={styles.data}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.textData}>Saldo :</Text>
                <Text>{item.saldo}</Text>
              </View>
              <Text style={styles.date}>{item.created_at}</Text>
            </View>
          );
        })}
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
