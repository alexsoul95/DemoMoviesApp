import {
  ActivityIndicator,
  ColorValue,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import {commonStyles} from '../utils/constants/commonStyles';

type Props = {
  size?: 'large' | 'small' | number;
  color?: ColorValue | null;
};

const LoadingIndicator = ({size = 'large', color}: Props) => {
  return (
    <View style={[commonStyles.center, {flex: 1}]}>
      <ActivityIndicator color={color ? color : colors.primary} size={size} />
    </View>
  );
};

export default LoadingIndicator;

