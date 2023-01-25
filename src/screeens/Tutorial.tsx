import {Box, Center, VStack, Text} from 'native-base';
import React from 'react';
import {PrimaryBtn} from '../components/Button';
import {CustomInput} from '../components/CustomInput';
import Logo from '../components/Logo';
import SecondaryBtn from '../components/SecondaryBtn';
import {Colors} from '../constants/Colors';

const TutorialScreen = ({navigation}: any) => {
  return (
    <Box bg={Colors.background} flex={1}>
      <Center mt={32}>
        <Logo />
      </Center>

      <Text color={Colors.primary} width={'75%'} mx={'auto'} mt={6}>
        Chini will help you know more about the settlement, culture, language,
        traditiion, and many more of your tribe.
      </Text>
      <Center my={6}>
        <Text width={'75%'} mb={2}>
          Enter your tribe below to see learn your culture
        </Text>
        <VStack space={6}>
          <CustomInput text="Enter your name" color={Colors.primary} />
          <CustomInput text="Tribe" color={Colors.primary} />
          <PrimaryBtn text="Next" onPress={() => navigation.navigate('Home')} />
          <SecondaryBtn text="Explore" />
        </VStack>
      </Center>
    </Box>
  );
};

export default TutorialScreen;
