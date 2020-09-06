import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

const Root = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
);
export default Root;

AppRegistry.registerComponent(appName, () => Root);
