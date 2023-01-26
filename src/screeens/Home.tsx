import React, {useCallback} from 'react';
import {BackHandler, Alert} from 'react-native';
import {Box, Text} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const {user} = useSelector((state: any) => state);
  console.log('User is', user);
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
  return (
    <Box>
      <Text>Chini welcomes your {user && user.name}</Text>
    </Box>
  );
};

export default HomeScreen;
