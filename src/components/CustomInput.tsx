import {Input} from 'native-base';
import React, {FC} from 'react';

type InputTypes = {
  text: string;
  color: string;
};

export const CustomInput: FC<InputTypes> = ({text, color}, ...props) => {
  return <Input {...props} w={'75%'} placeholder={text} borderColor={color} />;
};
