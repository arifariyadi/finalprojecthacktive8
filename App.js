import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import allReducers from './src/reducers/index.js';
import Navigation from './src/Navigation';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
const store = createStore(allReducers, applyMiddleware(thunk));

import { StyleProvider } from 'native-base';


export default class NativeBaseRedux extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store= {store}>
        <Navigation />
        {/* <StyleProvider style={getTheme(material)}>
          <Navigation />
        </StyleProvider> */}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('FinalProject', () => FinalProject);
