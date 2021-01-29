import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
  Alert,
} from 'react-native';
import {styles} from '../styles/styleFormulir';
import LinearGradient from 'react-native-linear-gradient';
import {launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';
import Spinner from 'react-native-spinkit';
import AsyncStorage from '@react-native-community/async-storage';

export class Formulir extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      data: {},
      name: item.nama_lengkap,
      email: item.email,
      phone: item.no_telepon,
      address: item.alamat,
      image: {uri: item.foto_profil},
      uri: item.foto_profil,
      id: item.id,
      isloading: false,

      srcImage: '',
      filename: '',
      url: '',
    };
  }

  addPhoto() {
    const options = {
      noData: true,
      title: 'Take Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User Cancel');
      } else if (response.eror) {
        console.log('Image Picker Eror', response.eror);
      } else if (response.costumeBottom) {
        console.log('User Tapped costume bottom', response.costumeBottom);
      } else {
        console.log('reponse img Picker , and file name', response.fileName);
        this.setState({
          srcImage: {uri: response.uri},
          uri: response.uri,
          filename: response.fileName,
        });
      }
    });
  }

  addProfile = () => {
    this.setState({isloading: true});
    const {name, email, phone, address} = this.state;
    if (name !== '' || email !== '' || phone !== '' || address !== '') {
      const data = {
        nama_lengkap: name,
        email: email,
        no_telepon: phone,
        alamat: address,
        _method: 'PATCH',
      };
      const add = new FormData();
      // // don't forget to name the default of the back end what an example like this is
      add.append('foto_profil', {
        uri: this.state.uri,
        type: 'image/jpeg',
        name: this.state.filename,
      });
      for (var key in data) {
        add.append(key.toString(), data[key]);
      }
      console.log('Ini Data t', add);
      const {item} = this.props.route.params;
      fetch(`https://trashbag.herokuapp.com/api/user/${item.id}`, {
        method: 'POST',
        body: add,
        headers: {
          Authorization: `Bearer ${this.props.userData.userReducer.user}`,
          Accept: 'application/json',
        },
      })
        .then((response) => {
          console.log('respon ===', response);
          return response.json();
        })
        .then((resulty) => {
          console.log('resulty===', resulty);
          const {foto_profil} = resulty.data;
          const {nama_lengkap} = resulty.data;
          this.props.userImage(foto_profil);
          this.props.nameUser(nama_lengkap);
          if (resulty) {
            console.log('Sedang Menyimpan');
            let image_Key = ['image', foto_profil];
            let name_Key = ['name', nama_lengkap];
            AsyncStorage.multiSet([image_Key, name_Key]).then((value) => {
              this.setState({
                image_Key: value,
              });
            });
            ToastAndroid.show('Data Berhasil Di Tambahkan', ToastAndroid.LONG);
            this.props.navigation.navigate('Profile');
            console.log('Done Save');
            this.setState({isloading: false});
          }
        })
        .catch((err) => {
          console.log('Ini Error', err);
          ToastAndroid.show('Data Gagal ditambah kan', ToastAndroid.LONG);
          this.setState({isloading: false});
        });
    } else {
      ToastAndroid.show('Mohon Lengkapi Data Tersebut ', ToastAndroid.LONG);
      this.setState({isloading: false});
    }
  };

  Atention() {
    Alert.alert('Maaf Layanan ini Belum Tersedia');
  }

  render() {
    // const {item} = this.props.route.params;
    // console.log('Ini IDDDD ', this.props.route.params);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <LinearGradient style={styles.header} colors={['#5ad488ff', '#7cfc00']}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../assets/icon/Back.png')}
            />
          </TouchableOpacity>
          <Text>Edit Profile</Text>
        </LinearGradient>
        <LinearGradient
          style={styles.pactImage}
          colors={['#7cfc00', '#5ad488ff']}>
          <TouchableOpacity
            onPress={() => this.addPhoto()}
            style={styles.image}>
            <Image
              style={styles.icon}
              source={
                this.state.uri !== null
                  ? {
                      uri: this.state.uri,
                    }
                  : {
                      uri:
                        'https://image.shutterstock.com/image-vector/add-icon-plus-vector-260nw-454078798.jpg',
                    }
              }
            />
          </TouchableOpacity>
        </LinearGradient>
        <ScrollView style={styles.body}>
          <View style={styles.inBody}>
            <Text style={styles.text}>Name :</Text>
            <View style={styles.input}>
              <TextInput
                value={this.state.name}
                onChangeText={(name) => this.setState({name: name})}
                placeholder="Please Enter Name"
              />
            </View>
          </View>
          <View style={styles.inBody}>
            <Text>Email :</Text>
            <View style={styles.input}>
              <TextInput
                value={this.state.email}
                onChangeText={(email) => this.setState({email: email})}
                placeholder="Please Enter Email"
              />
            </View>
          </View>
          <View style={styles.inBody}>
            <Text>No Phone :</Text>
            <View style={styles.input}>
              <TextInput
                value={this.state.phone}
                onChangeText={(phone) => this.setState({phone: phone})}
                placeholder="Please Enter Phone"
              />
            </View>
          </View>
          <View style={styles.inBody}>
            <Text>Address :</Text>
            <View style={styles.inputPact}>
              <TextInput
                style={styles.inputText}
                value={this.state.address}
                multiline={true}
                onChangeText={(address) => this.setState({address: address})}
                placeholder="Please Enter Address"
              />
              <TouchableOpacity
                onPress={() => this.Atention()}
                style={styles.pactMaps}>
                <Image
                  style={styles.maps}
                  source={require('../assets/icon/address.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.addProfile()}
            style={styles.patchEdit}>
            <LinearGradient
              style={styles.color}
              colors={['#5ad488ff', '#7cfc00']}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'white'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.textBottom}>Edit Profile</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.textEnd}>Your Privacy In Securty</Text>
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
// send data again to redux (name and image)
const mapDispatchToProps = (dispatch) => {
  return {
    userImage: (image) => dispatch({type: 'IMAGE_USER', payload: image}),
    nameUser: (name) => dispatch({type: 'NAME_USER', payload: name}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulir);
