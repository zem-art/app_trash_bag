import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import {styles} from '../styles/styleChatAdmin1';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import {connect} from 'react-redux';

export class ChatAdmin extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isloading: false,
      refreash: false,
    };
  }

  componentDidMount() {
    this.GetChat();
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.GetChat();
  }

  GetChat = async () => {
    this.setState({isloading: true});
    try {
      await axios({
        url: 'https://trashbag.herokuapp.com/api/getMessangers',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props.userData.userReducer.user}`,
        },
      })
        .then((result) => {
          console.log('Berhasil GET==', result.data.data);
          this.setState({
            isloading: false,
            data: result.data.data,
            refreash: false,
          });
        })
        .catch((err) => {
          console.log('Gagal===', err);
          this.setState({isloading: false, refreash: false});
        });
    } catch (err) {
      console.log('Gagal===', err);
    }
  };

  render() {
    if (this.state.isloading) {
      return (
        <View style={styles.Loading}>
          <Spinner color={'blue'} size={40} type="ThreeBounce" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <View style={styles.header}>
          <Text style={styles.Title}>Chat</Text>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreash}
              onRefresh={() => this.onRefreash()}
            />
          }>
          <View style={styles.body}>
            {this.state.data.map((item, value) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('InChat', {
                        item: item,
                      })
                    }
                    style={styles.inbody}>
                    <View style={styles.Image}>
                      <Image
                        style={styles.icon}
                        source={{uri: item.foto_profil}}
                      />
                    </View>
                    <View>
                      <Text>{item.nama_lengkap}</Text>
                    </View>
                  </TouchableOpacity>
                </>
              );
            })}
            <View style={styles.bottom} />
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

export default connect(mapStateToProps)(ChatAdmin);
