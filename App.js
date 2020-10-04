import React, { Component } from 'react'
import { Text, View } from 'react-native'
import NavigationScreen from './src/navigations/index.navigation';
import {Provider} from 'react-redux';
import store from './src/store';
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationScreen/>
      </Provider>
    )
  }
}

export default App
