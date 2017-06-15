/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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
        <WebView source={{uri: 'https://www.bestar.kz/'}} />
    );
  }
}

AppRegistry.registerComponent('beSTAR', () => beSTAR);
