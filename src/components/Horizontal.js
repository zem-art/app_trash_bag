import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styleAdmin1';

export class Horizontal extends Component {
  render() {
    return (
      <>
        <View style={styles.body}>
          <Text>Jenis Sampah : </Text>
        </View>
        <TouchableOpacity style={styles.body}>
          <Text>Plastik</Text>
          <Text>0 Kg</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.body}>
          <Text>Kertas</Text>
          <Text>0 Kg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.body}>
          <Text>Besi</Text>
          <Text>0 Kg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.body}>
          <Text>Kayu</Text>
          <Text>0 Kg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.body}>
          <Text>Daun</Text>
          <Text>0 Kg</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default Horizontal;
