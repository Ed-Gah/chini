import {Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import React from 'react';
import {theme} from '../utils/theme';

type ButtonTypes = {
  text: string;
  onPress: () => void;
};
console.log('Primary Theme', theme.colors.main.primary);
export default function SecondaryBtn({text, onPress}: ButtonTypes) {
  return (
    <TouchableOpacity>
      <Text
        onPress={onPress}
        fontWeight={'bold'}
        borderRadius={3}
        py={2.5}
        textAlign={'center'}
        borderWidth={1}
        borderColor={theme.colors.main.primary}
        color={theme.colors.main.primary}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
