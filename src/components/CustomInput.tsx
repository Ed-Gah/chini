import {Input} from 'native-base';
import React, {FC} from 'react';

type InputTypes = {
  text: string;
  color: string;
};

export const CustomInput: FC<InputTypes> = ({text, color}) => {
  return <Input w={'75%'} placeholder={text} borderColor={color} />;
};
