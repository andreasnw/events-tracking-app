import 'react-native-gesture-handler';
import React from 'react';
import { store, persistor } from '@boot/configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './App/routes';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRoutes />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    )
  }
}