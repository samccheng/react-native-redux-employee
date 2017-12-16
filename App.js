import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import firebase from 'firebase'
import reducer from './src/reducers'
import { Header } from './src/components/common'
import LoginForm from './src/components/LoginForm'
import RootNavigator from './src/routes.js'

const store = createStore(reducer, {}, applyMiddleware(thunk))

const config = {
  
};

export default class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
