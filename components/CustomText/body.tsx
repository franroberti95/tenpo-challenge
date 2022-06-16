import React from 'react';
import {BaseBody, Body100, Body70, Body50, Body300} from './styles';

interface BodyI {
  variant?: 'body' | 'body300' | 'body100' | 'body50' | 'body70';
  children: string | JSX.Element;
  fontWeight?: number;
  color?: string;
  align?: string;
  customStyle?: string;
}

const Body = ({
  variant = 'body',
  color = 'black',
  fontWeight = 400,
  align = 'left',
  customStyle = '',
  children,
}: BodyI) =>
  React.createElement(
    variants[variant],
    {fontWeight, align, color, customStyle},
    children,
  );

const variants = {
  body: BaseBody,
  body300: Body300,
  body100: Body100,
  body70: Body70,
  body50: Body50,
};

export default Body;
