import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ReviewItemProps} from '../types/types';
import AppText from './AppText';
import {spacing} from '../theme/spacing';
import StarRating from 'react-native-star-rating';
import { colors } from '../theme/colors';

const ReviewItem = ({item}: {item: ReviewItemProps}) => {
  const {author, authorRating, summary, submissionDate } = item;
  return (
    <View style={{gap: spacing.md, maxHeight: 200}}>
      <AppText weight="bold">
        {author.nickName}
      </AppText>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {authorRating && (
          <StarRating
            containerStyle={{gap: spacing.xs}}
            disabled={true} 
            maxStars={5}
            starSize={20}
            fullStarColor={colors.rating}
            rating={authorRating / 2} />
        )}
        {submissionDate && (
           <AppText size='small' color={'white'}>{submissionDate}</AppText>
        )}
      </View>
      <AppText>{summary.originalText}</AppText>
      <View style={{flex: 1, flexWrap: 'wrap'}}>
        
      </View>
    </View>
  );
};

export default ReviewItem;

const styles = StyleSheet.create({});
