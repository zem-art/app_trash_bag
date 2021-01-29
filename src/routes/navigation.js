import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import Login from '../screen/auth/login';
import Intro from '../screen/Intro';
import Register from '../screen/auth/register';
import ButtomTab from '../routes/ButtonTab';
import Splash from '../screen/Splash';
import Driver from '../components/Driver';
import Header from '../components/headeProfileHome';
import Formulir from '../components/formulirProfile';
import MyAcounts from '../components/MyAcounts';
import Succses from '../components/Succses';
import FormulirA from '../components/Formulirbarang';
import Hitung from '../components/Hitung';
import SuccesesBalance from '../components/SuccesesBalance';
import Maps from '../components/maps';
import Deposit from '../components/Deposit';
import SuccsesT from '../components/SuccsesT';
import Chat from '../components/Chat';
import ChatPersonal from '../components/ChatPersonal';
import Forgot from '../screen/auth/forgot';
import SuccsesF from '../components/sucsessForgot';
import Total from '../components/Total';
import HistoryS from '../components/HistoryS';

const Stack = createStackNavigator();

class Navigation extends Component {
  constructor() {
    super();
    // splash kondisi true
    this.state = {
      splash: true,
    };
  }
  // get reload again in Asyncstorage
  getToken = async () => {
    // let values;
    try {
      AsyncStorage.multiGet(['token', 'role', 'name', 'email', 'image']).then(
        (value) => {
          // send to redux don't forget
          this.props.userLogin(value[0][1]);
          this.props.userRole(value[1][1]);
          this.props.nameUser(value[2][1]);
          this.props.emailUser(value[3][1]);
          this.props.userImage(value[4][1]);
          // console.log('Ini Token save AsynStore==', value[0][1]);
          // console.log('Ini Role Save AsynStore==', value[1][1]);
          // console.log('INI dari Asynstore== ', value);
          this.setState({splash: false});
        },
      );
    } catch (e) {
      console.log('eroror get token', e);
      this.setState({splash: false});
    }
    // console.log('INI Values ===', values);
  };

  componentDidMount() {
    // create time to turn off delay
    setTimeout(() => {
      this.getToken();
    }, 3000);
  }

  render() {
    if (this.state.splash) {
      // impor splah screen
      return <Splash />;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.userData.userReducer.user === '' ||
          this.props.userData.userReducer.user === null ? (
            // above to check if there is a token and make logic for the user
            <>
              <Stack.Screen
                name="Intro"
                component={Intro}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Forgot"
                component={Forgot}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ForgotS"
                component={SuccsesF}
                options={{headerShown: false}}
              />
            </>
          ) : (
            // if it has a token
            <Stack.Screen
              name="ButtomTab"
              component={ButtomTab}
              options={{headerShown: false}}
            />
          )}
          <Stack.Screen
            name="Category"
            component={Driver}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Header"
            component={Header}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Formulir"
            component={Formulir}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyAcounts"
            component={MyAcounts}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Succses"
            component={Succses}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="formulirBarang"
            component={FormulirA}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Hitung"
            component={Hitung}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SuccsesB"
            component={SuccesesBalance}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Maps"
            component={Maps}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Deposit"
            component={Deposit}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Succses2"
            component={SuccsesT}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InChat"
            component={Chat}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Personal"
            component={ChatPersonal}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Total"
            component={Total}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="History"
            component={HistoryS}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

// // send token and role and name to redux
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (token) => dispatch({type: 'SET_USER', payload: token}),
    userRole: (role) => dispatch({type: 'USER_ROLE', payload: role}),
    nameUser: (name) => dispatch({type: 'NAME_USER', payload: name}),
    emailUser: (email) => dispatch({type: 'EMAIL_USER', payload: email}),
    userImage: (image) => dispatch({type: 'IMAGE_USER', payload: image}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
