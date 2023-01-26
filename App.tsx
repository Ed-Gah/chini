import 'react-native-gesture-handler';
import {theme} from 'native-base';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store/app/store';

const App = () => {
  console.log('Redux store', store.getState());
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <AppNavigator />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
