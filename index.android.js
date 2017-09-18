/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import appsFlyer from 'react-native-appsflyer';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  WebView,
  View
} from 'react-native';

export default class beSTAR extends Component {
  render() {
    return (
        <WebView 
          source={{uri: 'https://www.bestar.kz/'}} 
          userAgent="beSTAR-Android/1.2" />
    );
  }
}


AppRegistry.registerComponent('beSTAR', () => beSTAR);
