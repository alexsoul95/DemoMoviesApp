import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {colors} from '../../theme/colors';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import {spacing} from '../../theme/spacing';
import AppText from '../../components/AppText';
import MovieItem from '../../components/MovieItem';
import {MovieItemProps} from '../../types/types';
import {dummyList} from '../../utils/constants/dummyList';
import {styles} from './styles';
import SearchHeader from './SearchHeader';
import {useFocusEffect} from '@react-navigation/native';
import SearchOverlay from './SearchOverlay';
import Separator from '../../components/Separator';
import {StackScreenProps} from '@react-navigation/stack';
import { MainStackParams } from '../../navigators/MainNavigator';

type Props = StackScreenProps<MainStackParams, 'MainScreen'>;

const MainScreen = ({navigation, route}: Props) => {
  const [text, setText] = useState('');
  const [isInputFocused, setFocused] = useState(false);

  const refInput = useRef<TextInput>(null);

  // const renderItem = ({item}: {item: MovieItemProps}) => (
  //   <ListItem onPress={onListItemPress} onLike={handleLike} item={item} />
  // );

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (isInputFocused) {
          handleCloseSearch();
          return true;
        } else {
          return false;
        }
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, [isInputFocused, setFocused]),
  );

  const handleOpenSearch = useCallback(() => {
    // getSearchItems(text)
    refInput.current?.focus()
    setFocused(true)
  }, [isInputFocused]);
  const handleItemPress = (id: string) => {
    navigation.navigate("MovieScreen", {id})
  }
  const handleCloseSearch = useCallback(() => {
    setText('');
    refInput.current?.blur();
    setFocused(false)
    // clearSearch()
  }, [isInputFocused]);

  return (
    <ScreenWrapper style={styles.container}>
      <SearchHeader
        inputRef={refInput}
        setText={setText}
        text={text}
        isFocused={isInputFocused}
        onClose={handleCloseSearch}
        onFocus={handleOpenSearch}
      />
      <FlatList
        data={dummyList}
        renderItem={({item}: {item: MovieItemProps}) => (
          <MovieItem onPress={handleItemPress} item={item} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item['#IMDB_ID']}
        ItemSeparatorComponent={() => <Separator />}
      />

      {isInputFocused && (
        <SearchOverlay
          searchItems={dummyList}
          isLoading={false}
        />
      )}
    </ScreenWrapper>
  );
};

export default MainScreen;
