/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Landing from './app/components/Landing';
import Scanner from './app/components/Scanner';
import Config from './app/components/Config';
import Stock from './app/components/Stock';
import Bluetooth from './app/components/Bluetooth';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

const AppNavigation = createStackNavigator({
  Home: { screen: Landing },
  Camera: { screen: Scanner },
  config: { screen: Config },
  stock: { screen: Stock },
  bluetooth: { screen: Bluetooth },
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
  })

const AppContainer = createAppContainer(AppNavigation);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}


