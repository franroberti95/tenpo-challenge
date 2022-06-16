import React from 'react';
import {InputContainer, StyledInput, RightIconContainer} from './styles';

interface InputI {
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  rightIcon?: JSX.Element;
  inputProps?: object;
}

const Input = ({
  placeholder,
  inputProps,
  value,
  onChange,
  rightIcon,
}: InputI) => (
  <InputContainer>
    <StyledInput
      style={{shadowOffset: {width: 3, height: 3}, elevation: 3}}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      {...inputProps}
    />
    {rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
  </InputContainer>
);

export default Input;
