import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MovieItemProps } from '../types/types'
import AppText from './AppText';
import { spacing } from '../theme/spacing';
import FastImage from 'react-native-fast-image';
import Column from './Column';
import AnimatedButton from './AnimatedButton';

type Props = {
  item: MovieItemProps
}
const placeholderImg = require('../../../assets/images/placeholder.png');

const SearchItem = ({item} : Props) => {

  const img = item['#IMG_POSTER']

  return (
    <AnimatedButton style={styles.container}>
      <View style={{flex: .3}}>
        <FastImage
            style={{flex: 1}}
            source={img ? {uri: img} : placeholderImg}
            resizeMode={'contain'}
        />
      </View>
      <View style={styles.contentContainer}>
        {!!item['#TITLE'] && <AppText weight='semibold'>{item['#TITLE']}</AppText>}
      </View>
    </AnimatedButton>
  )
}

export default SearchItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: 'transparent',
    gap: spacing.md,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: .7, 
  }
})