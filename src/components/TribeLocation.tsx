import React from 'react';
import {Box, Text, VStack} from 'native-base';
import {Colors} from '../constants/Colors';

type TribeLocationTypes = {
  name: string;
  description: string;
};

export default function TribeLocation({name, description}: TribeLocationTypes) {
  return (
    <Box>
      <VStack>
        <Text color={Colors.primary} fontSize={'xl'}>
          {name}
        </Text>
        <Text textAlign={'center'}>{description}</Text>
      </VStack>
    </Box>
  );
}
