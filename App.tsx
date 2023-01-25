import 'react-native-gesture-handler';
import {theme} from 'native-base';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigator />
    </NativeBaseProvider>
  );
};

export default App;
