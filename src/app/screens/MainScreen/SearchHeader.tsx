import React, { Dispatch, SetStateAction } from "react"
import { useStore } from "zustand"
import { colors } from "../../theme/colors"
import { spacing } from "../../theme/spacing"
import { typography } from "../../theme/typography"
import { styles } from "./styles"
import Feather from 'react-native-vector-icons/Feather'
import { NativeSyntheticEvent, Pressable, TextInput, TextInputFocusEventData, View } from "react-native"

type Props = {
  inputRef: React.RefObject<TextInput>;
  setText: Dispatch<SetStateAction<string>>
  text: string;
  onFocus: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void);
  isFocused: boolean;
  onClose: () => void
}
const SearchHeader = (
  {inputRef,setText, text, onFocus, isFocused, onClose} : Props) => {

  return(
    <View style={{flexDirection: 'row', gap: spacing.sm, alignItems: 'center'}}>
      {isFocused && <Pressable onPress={onClose}>
        <Feather name={'chevron-left'} color={'white'} size={20} />
      </Pressable>}
      <View style={styles.searchStyle}>
            <Feather name='search' size={20} color={'black'}/>
            <TextInput
            ref={inputRef}
            numberOfLines={1}
            onChangeText={setText}
            placeholder={"Search..."}
            placeholderTextColor={colors.grey2}
            onFocus={onFocus}
            value={text}
            style={styles.searchTextStyle}/>
      </View>
    </View>
  ) 
}

export default SearchHeader