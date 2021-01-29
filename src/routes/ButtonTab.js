import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';

import Home from '../container/Home';
import Profile from '../container/Profile';

import Driver from '../container/HomeAdmin_1';
import ChatAdmin1 from '../container/ChatAdmin';

import Admin from '../container/HomeAdmin2';
import ProfileA from '../container/ProfileAdmin';

const Tab = createBottomTabNavigator();

class ButtomTab extends Component {
  render() {
    // console.log('Ini Redux', this.props.userData.userReducer.role);
    return (
      <Tab.Navigator
        tabBarOptions={{
          // showLabel: false,
          // activeBackgroundColor: '#5ad488ff',
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#a9a9a9',
          activeBackgroundColor: '#7cfc00',
        }}>
        {this.props.userData.userReducer.role ? (
          this.props.userData.userReducer.role == 1 ? (
            <>
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarIcon: () => (
                    <Image
                      source={require('../assets/icon/dashBoard.png')}
                      style={styles.icon}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Chat"
                component={ChatAdmin1}
                options={{
                  tabBarIcon: () => (
                    <Image
                      source={require('../assets/icon/Chat.png')}
                      style={styles.icon}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  tabBarIcon: ({color}) => (
                    <Image
                      source={require('../assets/icon/nameTag.png')}
                      style={styles.icon}
                    />
                  ),
                }}
              />
            </>
          ) : this.props.userData.userReducer.role == 2 ? (
            <>
              <Tab.Screen
                name="Driver"
                component={Driver}
                options={{
                  tabBarIcon: () => (
                    <Image
                      source={require('../assets/icon/dashBoard.png')}
                      style={styles.icon}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Chat"
                component={ChatAdmin1}
                options={{
                  tabBarIcon: () => (
                    <Image
                      source={require('../assets/icon/Chat.png')}
                      style={styles.icon}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={ProfileA}
                options={{
                  tabBarIcon: () => (
                    <Image
                      source={require('../assets/icon/nameTag.png')}
                      style={styles.icon}
                    />
                  ),
                }}
              />
            </>
          ) : this.props.userData.userReducer.role == 3 ? (
            <>
              <Tab.Screen
                name="Admin2"
                component={Admin}
                options={{
                  tabBarIcon: () => (
                    <Image
                      source={require('../assets/icon/dashBoard.png')}
                      style={styles.icon}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={ProfileA}
                options={{
                  tabBarIcon: () => (
                    <Image
                      source={require('../assets/icon/nameTag.png')}
                      style={styles.icon}
                    />
                  ),
                }}
              />
            </>
          ) : null
        ) : null}
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

export default connect(mapStateToProps)(ButtomTab);
// export default ButtomTab;

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
  },
});
