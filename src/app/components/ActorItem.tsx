import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {spacing} from '../theme/spacing';
import FastImage from 'react-native-fast-image';
import AppText from './AppText';
import {ActorItemProps} from '../types/types';

const ActorItem = ({item}: {item: ActorItemProps}) => {
  const {primaryImage, nameText} = item?.name;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.imageStyle}
          resizeMode={'cover'}
          source={{
            uri: primaryImage?.url,
          }}
        />
      </View>
      <AppText numberOfLines={2}>{nameText.text}</AppText>
    </View>
  );
};

export default ActorItem;

const styles = StyleSheet.create({
  container: {
    width: 120,
    gap: spacing.sm,
  },
  imageContainer: {
    width: 120,
    aspectRatio: 1,
    borderRadius: 20,
  },
  imageStyle: {
    flex: 1,
    borderRadius: 10,
  },
});
