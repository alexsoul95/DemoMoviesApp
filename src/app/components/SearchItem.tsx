import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText';
import { spacing } from '../theme/spacing';
import FastImage from 'react-native-fast-image';
import Column from './Column';
import AnimatedButton from './AnimatedButton';
import Feather from 'react-native-vector-icons/Feather';
import { MovieShortItemProp } from '../types/types';

type Props = {
  item: MovieShortItemProp,
  onPress: (id: string) => void
}
const placeholderImg = require('../../../assets/images/placeholder.png');

const SearchItem = ({item, onPress} : Props) => {

  const img = item['#IMG_POSTER']

  return (
    <AnimatedButton onPress={() => onPress(item['#IMDB_ID'])} style={styles.container}>
      <View style={{flex: .2}}>
        <FastImage
            style={{flex: 1}}
            source={img ? {uri: img} : placeholderImg}
            resizeMode={'cover'}
        />
      </View>
      <View style={styles.contentContainer}>
        {!!item['#TITLE'] && <AppText weight='semibold'>{item['#TITLE']}</AppText>}
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Feather name='chevron-right' size={20} color={'white'}/>
        </View>
      </View>
    </AnimatedButton>
  )
}

export default SearchItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: 'transparent',
    gap: spacing.md,
    flexDirection: 'row',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: .8, 
  }
})