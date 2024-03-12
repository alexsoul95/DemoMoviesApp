import React, {Dispatch, SetStateAction, useRef} from 'react';
import {useStore} from 'zustand';
import {colors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import {typography} from '../../theme/typography';
import {styles} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {
  Animated,
  Easing,
  NativeSyntheticEvent,
  Pressable,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';

const AnimatedIcon = Animated.createAnimatedComponent(Feather);

type Props = {
  inputRef: React.RefObject<TextInput>;
  setText: Dispatch<SetStateAction<string>>;
  text: string;
  onFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  isFocused: boolean;
  onClose: () => void;
};
const SearchHeader = ({
  inputRef,
  setText,
  text,
  onFocus,
  isFocused,
  onClose,
}: Props) => {

  const animVal = useRef(new Animated.Value(0)).current;
  const interpolateIcon = animVal.interpolate({inputRange:[0,1], outputRange:['0%','100%']})
  const interpolateSearch = animVal.interpolate({inputRange:[0,1],outputRange:['100%','90%']})

  // TODO: Change animation from Animated Api to Reanimated for smoothness
  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    Animated.timing(animVal, {
      toValue: 1,
      useNativeDriver: false
    }).start();
    onFocus(e)
  }
  const handleClose = () => {
    Animated.timing(animVal, {
      toValue: 0,
      useNativeDriver: false
    }).start();
    onClose()
  }
  return (
    <View style={{flexDirection: 'row', gap: spacing.sm, alignItems: 'center'}}>
      {isFocused && (
        <Pressable onPress={handleClose}>
          <AnimatedIcon name={'chevron-left'} color={'white'} size={20} style={{width: interpolateIcon}} />
        </Pressable>
      )}
      <Animated.View style={[styles.searchStyle, {width: interpolateSearch}]}>
        <Feather name="search" size={20} color={'black'} />
        <TextInput
          ref={inputRef}
          numberOfLines={1}
          onChangeText={setText}
          placeholder={'Search...'}
          placeholderTextColor={colors.grey2}
          onFocus={handleFocus}
          value={text}
          style={styles.searchTextStyle}
        />
      </Animated.View>
    </View>
  );
};

export default SearchHeader;
