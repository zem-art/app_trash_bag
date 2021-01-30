import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleInChat';
import axios from 'axios';
import {connect} from 'react-redux';
import Pusher from 'pusher-js/react-native';

export class Chat extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      id: item.id,
      send: '',
      data: [],
      isloading: false,
    };
  }

  componentDidMount() {
    this.getChat();
    Pusher.logToConsole = true;
    var pusher = new Pusher('0cc37a33022ed847be85', {
      cluster: 'mt1',
    });
    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data) => {
      // alert(JSON.stringify(data));
      this.getChat(data);
      console.log('Berjalan Woyyy===');
    });
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getChat();
  }

  sendMessage() {
    console.log('Mulai Mengirim');
    axios({
      url: `https://trashbag.herokuapp.com/api/sendMessage/${this.state.id}`,
      method: 'POST',
      data: {
        message: this.state.send,
      },
      headers: {
        Authorization: `Bearer ${this.props.userData.userReducer.user}`,
      },
    })
      .then((result) => {
        console.log('Berhasil SEND ==', result.data.data);
        ToastAndroid.show('Sucsess', ToastAndroid.LONG);
        this.setState({
          isloading: false,
          send: '',
        });
      })
      .catch((err) => {
        console.log('Gagal SEND===', err);
        ToastAndroid.show('Eror Send SMS', ToastAndroid.LONG);
        this.setState({isloading: false});
      });
    console.log('INI Selesai');
  }

  getChat = async () => {
    this.setState({isloading: true});
    try {
      let response = await axios({
        url: `https://trashbag.herokuapp.com/api/getMessage/${this.state.id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props.userData.userReducer.user}`,
        },
      });
      const data = response.data;
      // console.log('BERHASIL GET==', data.data);
      this.setState({
        data: data.data,
        isloading: false,
        refreash: false,
      });
    } catch (err) {
      console.log('Gagal===', err);
      ToastAndroid.show('Eror Send SMS', ToastAndroid.LONG);
      this.setState({isloading: false, refreash: false});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <View style={styles.header}>
          <View style={styles.inHeader}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={styles.back}
                source={require('../assets/icon/Back.png')}
              />
            </TouchableOpacity>
            <Text>Chat</Text>
          </View>
        </View>
        <ScrollView
          style={styles.body}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreash}
              onRefresh={() => this.onRefreash()}
            />
          }>
          {this.state.data.map((item, value) => (
            // Cek Kondisi yang lagi login dan di samakan sama yg di ternery TO nya
            <>
              {this.state.id === item.to ? (
                <View style={styles.From}>
                  <Text>{item.message}</Text>
                </View>
              ) : (
                <View style={styles.Send}>
                  <Text>{item.message}</Text>
                </View>
              )}
            </>
          ))}

          <View style={styles.OutBootom} />
        </ScrollView>
        <View style={styles.pactBottom}>
          <TextInput
            multiline={true}
            style={styles.input}
            placeholder="Input Messanger"
            value={this.state.send}
            onChangeText={(send) =>
              this.setState({
                send: send,
              })
            }
          />
          <TouchableOpacity
            onPress={() => this.sendMessage()}
            style={styles.klik}>
            <Image
              style={styles.iconSend}
              source={require('../assets/icon/send.png')}
            />
          </TouchableOpacity>
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

export default connect(mapStateToProps)(Chat);
