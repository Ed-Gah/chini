import React, {FC} from 'react';
import {Box, Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '../utils/theme';

type ButtonTypes = {
  text: string;
  onPress: () => void;
};

export const PrimaryBtn: FC<ButtonTypes> = ({text, onPress}, ...props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box bgColor={theme.colors.main.primary}>
        <Text
          py={2.5}
          fontWeight={'bold'}
          textAlign={'center'}
          color={theme.colors.main.bgColor}
          {...props}>
          {text}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
