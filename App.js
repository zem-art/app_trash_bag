import React, {Component} from 'react';
('react-native');

import {Provider} from 'react-redux';
import store from './store/Store';
// import Splash from './src/screen/Splash';
import Navigation from './src/routes/navigation';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
