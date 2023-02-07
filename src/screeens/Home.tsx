import React, {useCallback} from 'react';
import {BackHandler, Alert} from 'react-native';
import {Box, HStack, Input, Text, VStack} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {getAuthUser} from '../store';
import {Colors} from '../constants/Colors';
import {tribes} from '../utils/tribesData';
import TribeLocation from '../components/TribeLocation';

const HomeScreen = () => {
  // Get user data from redux store
  const {name, tribe} = useSelector(getAuthUser);
  console.log('Tribe & Name: ', name, tribe);

  // Tribes mock data
  const selectedTribe = tribes.filter(item => item.name === tribe);
  console.log('This is the tribe', selectedTribe);

  // Render any single items
  const RenderItems = (title: string, items: Array<[]>) => {
    console.log('Items Length: ', items.length);
    return (
      <>
        <Text>{title}</Text>;
        {items.length !== 0 ? (
          items.map((item, i) => <Text key={i}>{item}</Text>)
        ) : (
          <Text>No values</Text>
        )}
      </>
    );
  };
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
    <Box flex={1} bgColor={Colors.background}>
      <Box mx={8}>
        <HStack space={4} my={4}>
          <Text color={Colors.primary} fontSize={'3xl'} fontWeight={'bold'}>
            LOGO
          </Text>
          <Text mt={2} fontSize={'md'}>
            Chini welcomes you {name}
          </Text>
        </HStack>
        <HStack space={4}>
          <Text>Menu</Text>
          <Input
            placeholder="Search"
            borderColor={Colors.primary}
            width={'67%'}
          />
          <VStack mt={-2}>
            <Text color={Colors.primary}>Tribe</Text>
            <Text
              borderWidth={1}
              borderColor={Colors.primary}
              p={1}
              color={Colors.background}
              bg={Colors.primary}
              borderRadius={4}>
              {tribe}
            </Text>
          </VStack>
        </HStack>
        <Text textAlign={'center'} fontSize={'xl'} my={4}>
          {tribe} ethnic group
        </Text>
        {selectedTribe.map((item, index) => (
          <HStack key={index} space={4}>
            <TribeLocation
              // key={index}
              name={'Region'}
              description={item.region}
            />
            <TribeLocation
              // key={index}
              name={'Division'}
              description={item.divison}
            />
            <TribeLocation
              // key={index}
              name={'Sub-Division'}
              description={item.subDivision}
            />
            <VStack key={index}>
              <Text color={Colors.primary} fontSize={'xl'}>
                Related Tribes
              </Text>
              {item.relatedTribes.map((lTribe, i) => (
                <Text key={i}>{lTribe}</Text>
              ))}
            </VStack>
          </HStack>
        ))}
      </Box>
    </Box>
  );
};

export default HomeScreen;
