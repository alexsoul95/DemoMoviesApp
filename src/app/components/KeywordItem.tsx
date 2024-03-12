import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { spacing } from '../theme/spacing';
import AppText from './AppText';

const RADIUS = 10;

const KeywordItem = ({text}: {text: string}) => {
  return (
    <View style={styles.container}>
      <AppText size={'small'}>{text}</AppText>
    </View>
  )
}

export default KeywordItem

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderColor: 'white',
    borderWidth: .5,
    borderTopStartRadius: RADIUS,
    borderTopEndRadius: RADIUS,
    borderEndEndRadius: RADIUS,
    borderEndStartRadius: RADIUS
  }
})