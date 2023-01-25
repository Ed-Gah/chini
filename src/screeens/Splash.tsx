import {Box, Center, Text} from 'native-base';
import React, {useEffect} from 'react';
import {Colors} from '../constants/Colors';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Tutorial');
    }, 3000);
  }, [navigation]);

  return (
    <Box bg={Colors.background} flex={1}>
      <Center my={'auto'}>
        <Text fontSize={'9xl'} color={Colors.primary}>
          C
        </Text>
      </Center>
    </Box>
  );
};

export default SplashScreen;
