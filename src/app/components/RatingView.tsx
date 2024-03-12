import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { spacing } from '../theme/spacing';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../theme/colors';
import AppText from './AppText';
const RatingView = ({rating} : {rating: number}) => {
  return (
    <View style={styles.container}>
      <FontAwesome name='star' size={24} color={colors.rating}/>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <AppText size={'large'}>{rating}</AppText>
        <AppText>{'/10'}</AppText>
      </View>
    </View>
  )
}

export default RatingView

const styles = StyleSheet.create({
  container: {
    width: 60,
    alignItems: 'center',
    gap: spacing.sm,
  }
})