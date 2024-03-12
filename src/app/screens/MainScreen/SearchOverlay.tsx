import { StyleSheet, Text, TouchableWithoutFeedback, View, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { spacing } from '../../theme/spacing'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import EmptyView from '../../components/EmptyView'
import LoadingIndicator from '../../components/LoadingIndicator'
import MovieItem from '../../components/MovieItem'
import { MovieItemProps } from '../../types/types'
import { SEARCH_H } from '../../utils/constants/constants'
import { colors } from '../../theme/colors'
import SearchItem from '../../components/SearchItem'
import Separator from '../../components/Separator'

type Props = {
  searchItems: MovieItemProps[],
  isLoading: boolean

}
const SearchOverlay = ({searchItems, isLoading} : Props) => {
  
  return (
    <View style={styles.container}>
       {isLoading ? <LoadingIndicator/> : 
       <FlatList
        data={searchItems}
        ListEmptyComponent={<EmptyView/>}
        contentContainerStyle={{rowGap: spacing.sm}}
        ItemSeparatorComponent={() => <Separator/>}
        showsVerticalScrollIndicator={false}
        renderItem={({item}: {item: MovieItemProps}) => (
          <SearchItem item={item} />
        )}
        keyExtractor={item => item['#IMDB_ID']}
        />
        }
    </View>
  )
}

export default SearchOverlay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: colors.primary,
    padding: spacing.md,
    position: 'absolute',
    top: SEARCH_H + spacing.md,
    bottom: 0,
    right: 0, 
    left: 0,
  },
})