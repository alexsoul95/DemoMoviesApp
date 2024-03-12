import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import MovieItem from '../../components/MovieItem';
import {dummyList} from '../../utils/constants/dummyList';
import {styles} from './styles';
import SearchHeader from './SearchHeader';
import {useFocusEffect} from '@react-navigation/native';
import SearchOverlay from './SearchOverlay';
import Separator from '../../components/Separator';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParams} from '../../navigators/MainNavigator';
import {useStore} from '../../store';
import LoadingIndicator from '../../components/LoadingIndicator';
import {MovieShortItemProp} from '../../types/types';

type Props = StackScreenProps<MainStackParams, 'MainScreen'>;

const MainScreen = ({navigation, route}: Props) => {
  // Store Actions and States
  const {getMainPage, LOADING, error, data} = useStore(state => state.main);
  const {getSearchItems, SEARCH_LOADING, searchError, clearSearch, searchData} =
    useStore(state => state.main);

  // Local Variables
  const [text, setText] = useState('');
  const [isInputFocused, setFocused] = useState(false);

  const refInput = useRef<TextInput>(null);

  useEffect(() => {
    getMainPage();
  }, []);

  useEffect(() => {
    getSearchItems(text)
  }, [text])

  useEffect(() => {
    if(error){
      Alert.alert(error)
    }
  }, [error])

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
    getSearchItems(text);
    refInput.current?.focus();
    setFocused(true);
  }, [isInputFocused]);

  const handleItemPress = (id: string) => {
    navigation.navigate('MovieScreen', {id});
  };
  const handleCloseSearch = useCallback(() => {
    setText('');
    refInput.current?.blur();
    setFocused(false);
    clearSearch();
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
      {LOADING ? (
        <LoadingIndicator color={'white'} />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}: {item: MovieShortItemProp}) => (
            <MovieItem onPress={handleItemPress} item={item} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item['#IMDB_ID']}
          ItemSeparatorComponent={() => <Separator />}
        />
      )}

      {isInputFocused && (
        <SearchOverlay itemPress={handleItemPress} searchItems={searchData} isLoading={SEARCH_LOADING} />
      )}
    </ScreenWrapper>
  );
};

export default MainScreen;
