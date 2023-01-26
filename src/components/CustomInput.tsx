import {Input} from 'native-base';
import React, {FC} from 'react';

type InputTypes = {
  text: string;
  color: string;
  onChangeText: (value: string) => void;
};

export const CustomInput: FC<InputTypes> = (
  {text, color, onChangeText},
  ...props
) => {
  return (
    <Input
      {...props}
      onChangeText={onChangeText}
      w={'75%'}
      placeholder={text}
      borderColor={color}
    />
  );
};
