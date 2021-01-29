import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from '../styles/styleAdmin2';

export class Horizontal2 extends Component {
  render() {
    return (
      <View>
        <ScrollView horizontal>
          <View style={styles.dataScroll}>
            <Text>Ini text</Text>
          </View>
          <View style={styles.dataScroll}>
            <Text>Ini text</Text>
          </View>
          <View style={styles.dataScroll}>
            <Text>Ini text</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Horizontal2;
