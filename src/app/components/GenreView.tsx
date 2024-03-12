import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { spacing } from '../theme/spacing';
import AppText from './AppText';

const GenreView = ({text} : {text: string}) => {
  return (
    <View style={styles.container}>
      <AppText size={'semismall'} >{text}</AppText>
    </View>
  )
}

export default GenreView

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: 'white'
  }
})