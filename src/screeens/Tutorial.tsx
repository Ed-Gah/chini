import {useState} from 'react';
import {Box, Center, VStack, Text, Select} from 'native-base';
import React from 'react';
import {useDispatch} from 'react-redux';
import {KeyboardAvoidingView} from 'react-native';
import {login} from '../store';
import {PrimaryBtn} from '../components/Button';
import {CustomInput} from '../components/CustomInput';
import Logo from '../components/Logo';
import SecondaryBtn from '../components/SecondaryBtn';
import {Colors} from '../constants/Colors';

const {Item} = Select;

const TutorialScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  // Inputs state object
  const [inputs, setInputs] = useState({
    name: '',
    tribe: '',
  });

  // mock data for tribes
  const tribes = ['Kom', 'Kambe', 'Bafmeng', 'Bum', 'Oku'];

  // Change the input state Change
  const handleInputChange = (text: any, input: any) => {
    setInputs((prevState: any) => ({...prevState, [input]: text}));
  };

  const handleNext = () => {
    const userData = {
      name: inputs.name,
      tribe: inputs.tribe,
    };
    dispatch(login(userData));
    navigation.navigate('Home');
  };

  return (
    <Box bg={Colors.background} flex={1}>
      <Center mt={32}>
        <Logo />
      </Center>

      <Text
        color={Colors.tertiary}
        width={'75%'}
        mx={'auto'}
        mt={6}
        textAlign={'center'}>
        Chini will help you know more about the settlement, culture, language,
        traditiion, and many more of your tribe.
      </Text>
      <KeyboardAvoidingView>
        <Center my={6}>
          <Text width={'75%'} mb={2}>
            Enter your tribe below to see learn your culture
          </Text>
          <VStack space={6}>
            <CustomInput
              text="Enter your name"
              color={Colors.primary}
              onChangeText={(text: any) => handleInputChange(text, 'name')}
            />

            <Select
              selectedValue={inputs.tribe}
              onValueChange={(text: any) => handleInputChange(text, 'tribe')}
              borderColor={Colors.primary}
              placeholder={'Select your tribe'}>
              {tribes.map((item: any, index: any) => (
                <Item key={index} label={item} value={item} />
              ))}
            </Select>

            <PrimaryBtn text="Next" onPress={handleNext} />
            <SecondaryBtn
              text="Explore"
              onPress={() => navigation.navigate('Home')}
            />
          </VStack>
        </Center>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default TutorialScreen;
