import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { spacing } from '../theme/spacing';

const Separator = () => <View style={styles.separator} />;

export default Separator

const styles = StyleSheet.create({
  separator: {
    height: .5,
    marginVertical: spacing.md, 
    width: '100%', 
    backgroundColor: 'white'
  },
})