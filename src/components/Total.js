import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  // ScrollView,
  StatusBar,
} from 'react-native';
import {styles} from '../styles/styleTotal';

export class Total extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      // Id Order
      idB: item.id,
      Pj: item.pj,
      information: item.keterangan,
      weight: item.berat,
      discharge: item.debit,
      date: item.created_at,
      // Id User
      idU: item.user.id,
      name: item.user.nama_lengkap,
      phone: item.user.no_telepon,
      address: item.user.alamat,
      photo: {uri: item.user.foto_profil},
      // Id Type Barang
      idJ: item.jenis.id,
      type: item.jenis.jenis_sampah,
      price: item.jenis.harga,
    };
  }

  GoTO() {
    this.props.navigation.navigate('SuccsesB');
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5ad488ff" />
        <View style={styles.header}>
          <Text style={styles.Title}>Penghitungan Berhasil</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.data}>
            <Text>No Barang</Text>
            <Text>{this.state.idB}</Text>
          </View>
          <View style={styles.data}>
            <Text>Berat</Text>
            <Text>{this.state.weight}</Text>
          </View>
          <View style={styles.data}>
            <Text>Debit</Text>
            <Text>{this.state.discharge}</Text>
          </View>
          <View style={styles.data}>
            <Text>Date</Text>
            <Text>{this.state.date}</Text>
          </View>
          <View style={styles.data}>
            <Text>Name User</Text>
            <Text>{this.state.name}</Text>
          </View>

          <View style={styles.data}>
            <Text>Type</Text>
            <Text>{this.state.type}</Text>
          </View>
          <View style={styles.data}>
            <Text>Price All</Text>
            <Text>{this.state.price}</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => this.GoTO()} style={styles.klik}>
            <Text style={styles.Title}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Total;
