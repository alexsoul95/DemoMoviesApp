import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppText from './AppText';
import Feather from 'react-native-vector-icons/Feather';
import {spacing} from '../theme/spacing';
import AnimatedButton from './AnimatedButton';

type Props = {
  title: string;
  chevron?: boolean;
  onBack?: (event: GestureResponderEvent) => void;
  titleSize?: 'title' | 'large' | 'medium' | 'small';
};
const AppHeader = ({
  title,
  chevron = false,
  onBack,
  titleSize = 'title',
}: Props) => {
  return (
    <View style={styles.container}>
      <AnimatedButton onPress={onBack}>
        {chevron && <Feather name={'chevron-left'} color={'white'} size={26} />}
      </AnimatedButton>
      <View style={{flex: 5, alignItems: 'center'}}>
        <AppText
          ellipsizeMode={'tail'}
          numberOfLines={1}
          weight="bold"
          size={titleSize}>
          {title}
        </AppText>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
});
