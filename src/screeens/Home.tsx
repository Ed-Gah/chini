import React, {useCallback} from 'react';
import {BackHandler, Alert} from 'react-native';
import {Box} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';

const HomeScreen = () => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Exit Chini!', 'Are you sure you want to exit this app?', [
          {text: 'Cancel', onPress: () => null, style: 'cancel'},
          {text: 'Yes', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  return <Box>The Main Screen</Box>;
};

export default HomeScreen;
