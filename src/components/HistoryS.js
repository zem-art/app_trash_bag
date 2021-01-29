import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from '../styles/styleHistoryS';

export class HistoryS extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Back</Text>
        </View>
        <ScrollView>
          <View>
            <Text>BOdy</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HistoryS;
