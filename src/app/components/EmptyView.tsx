import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../theme/colors';

const EmptyView = () => {
  return (
    <View style={styles.container}>
      <Feather name='search' size={20} color={colors.grey2}/>
      <AppText>{'No results founds'}</AppText>
    </View>
  )
}

export default EmptyView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})