import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MovieItemProps } from '../types/types'
import AppText from './AppText';
import { spacing } from '../theme/spacing';
import FastImage from 'react-native-fast-image';
import Column from './Column';

type Props = {
  item: MovieItemProps
}
const placeholderImg = require('../../../assets/images/placeholder.png');

const MovieItem = ({item} : Props) => {

  const img = item['#IMG_POSTER']

  return (
    <View style={styles.container}>
      <View style={{flex: .3}}>
        <FastImage
            style={{flex: 1}}
            source={img ? {uri: img} : placeholderImg}
            resizeMode={'cover'}
        />
      </View>
      <View style={{flex: .7, gap: spacing.sm}}>
        {!!item['#TITLE'] && <Column name={'Title'} description={item['#TITLE']}/>}
        {!!item['#YEAR'] && <Column name={'Year'} description={item['#YEAR']}/>}
        {!!item['#RANK'] && <Column name={'Movie Rank'} description={item['#RANK']}/>}
        {!!item['#ACTORS'] && <Column name={'Actors'} numOfLines={3} description={item['#ACTORS']}/>}

      </View>
    </View>
  )
}

export default MovieItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: 'transparent',
    gap: spacing.md,
    flexDirection: 'row',
  }
})