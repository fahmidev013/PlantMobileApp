
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from '../src/store'; //Import the store
import Navigation from './navigation/index';


export default class App extends Component { //<Props> include
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

