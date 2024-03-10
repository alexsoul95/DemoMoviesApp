import {Text, TextProps} from 'react-native';
import React from 'react';
import {TextStyle} from 'react-native';
import { FONT_SIZE, typography } from '../theme/typography';

interface Props extends TextProps {
  children: React.ReactNode;
  size?: keyof typeof FONT_SIZE;
  weight?: keyof typeof typography.primary;
  style?: TextStyle;
  
};

const AppText = ({children, size = "medium", weight = "regular", style = {}, ...rest}: Props) => {
  const baseStyle: TextStyle = {
    fontSize: FONT_SIZE[size],
    fontFamily: typography.primary[weight],
    color: 'black'
  };

  return <Text style={{...baseStyle, ...style}} {...rest}>{children}</Text>;
};

export default AppText;
