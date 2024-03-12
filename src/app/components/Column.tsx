import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { commonStyles } from '../utils/constants/commonStyles'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing';

type Props = {
  name: string,
  description: string | number,
  numOfLines?: number
}
const Column = ({
  name,
  description,
  numOfLines = 1
} : Props) => {
  return (
    <View style={styles.container}>
      <AppText size={'semismall'} weight='bold' style={styles.grayText}>{`${name}:`}</AppText>
      <AppText size={'semismall'} weight='semibold' numberOfLines={numOfLines} style={styles.descriptionText}>{description}</AppText>

    </View>
  )
}

export default Column

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.xs,
    width: '100%'
  },
  grayText: {
    color: colors.grey2,
  },
  descriptionText: {
    flex: 1,
    flexWrap: 'wrap'
  }
})