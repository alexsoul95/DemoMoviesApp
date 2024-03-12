import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../theme/colors';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParams} from '../../navigators/MainNavigator';
import AppText from '../../components/AppText';
import AppHeader from '../../components/AppHeader';
import {dummyItem} from '../../utils/constants/dummyList';
import {ActorItemProps, CastEdge, Edge, MovieProp, ReviewEdge} from '../../types/types';
import {spacing} from '../../theme/spacing';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {commonStyles} from '../../utils/constants/commonStyles';
import GenreView from '../../components/GenreVIew';
import Separator from '../../components/Separator';
import RatingView from '../../components/RatingView';
import ActorItem from '../../components/ActorItem';
import ReviewItem from '../../components/ReviewItem';
import KeywordItem from '../../components/KeywordItem';

type Props = StackScreenProps<MainStackParams, 'MovieScreen'>;

const MovieScreen = ({navigation, route}: Props) => {
  const {id} = route.params;
  const {short, main}: MovieProp = dummyItem;
  const {name, image, description, actor, aggregateRating, datePublished, genre, keywords} = short;
  const actorsData = main?.cast?.edges;
  const reviewsData = main?.featuredReviews?.edges;

  useEffect(() => {
    if (id) {
    }
  }, [id]);
  return (
    <ScreenWrapper>
      <View style={styles.headerAbsolute}>
        <AppHeader onBack={() => navigation.goBack()} title={''} chevron/>
      </View>
      <ScrollView 
        nestedScrollEnabled={true}
        contentContainerStyle={styles.container}>

        {/* Image with fade bottom effect*/}
        <View style={styles.imageContainer}>
          <FastImage
            style={{flex: 1}}
            source={{uri: image}}
            resizeMode={'contain'}
          />
          <LinearGradient
            colors={['transparent', 'rgba(29, 29, 38, 1)']}
            locations={[0.3, 1]}
            style={commonStyles.absoluteCenter}
          />
          {/*Render Title + Genres + Rating */}
          <View style={styles.titleContainer}>
            <View style={[commonStyles.row]}>
              <AppText size='title'>{name}</AppText>
              <AppText>{`(${datePublished.split('-')[0]})`}</AppText>
            </View>
            {genre && !!genre.length &&
              <View style={commonStyles.row}>
                {genre.map(item => <GenreView key={item} text={item}/>)}
              </View>
            }
            {aggregateRating?.ratingValue &&
              <RatingView rating={aggregateRating.ratingValue}/>
            }
            <Separator/>
          </View>
        </View>
        {/* Content outside of image */}
        <View style={styles.contentContainer}>
          {/*Description  */}
          {description && 
          <View style={{gap: spacing.md}}>
            <AppText size='title'>{'Storyline'}</AppText>
            <AppText>{description}</AppText>
            <View style={styles.keywordsContainer}>
              {keywords.split(',').map(item => <KeywordItem key={item} text={item} />)}
            </View>
            <Separator/>
          </View>
          }
          {/* Actors row list*/}
          {actorsData && !!actorsData.length &&
          <View style={{gap: spacing.md}}>
            <AppText size='title'>{'Actors'}</AppText>
            <FlatList 
              data={actorsData} 
              keyExtractor={item => item.node.name.id.toString()}
              contentContainerStyle={{gap: spacing.sm}}
              horizontal={true}
              renderItem={({ item }: {item: CastEdge}) => <ActorItem item={item.node}/>} />
            <Separator/>
          </View>
          }
          {/* Reviews */}
          {reviewsData && !!reviewsData.length &&
          <View style={{gap: spacing.md}}>
            <AppText size='title'>{'Featured Reviews'}</AppText>
            <View style={{gap: spacing.sm}}>
              {reviewsData.map(item => <ReviewItem key={item.node.id} item={item.node}/>)}
            </View>
            <Separator/>
          </View>
          }
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: spacing.md,
  },
  imageContainer: {
    width: '100%',
    height: undefined,
    aspectRatio: 0.675,
    top: 0,
    left: 0,
    right: 0
  },
  headerAbsolute: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    zIndex: 10, 
    paddingHorizontal: spacing.md
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0, 
    left: 0, 
    right: 0, 
    zIndex: 10, 
    paddingHorizontal: spacing.md,
    gap: spacing.sm
  },
  contentContainer: {
    paddingHorizontal: spacing.md,
  },
  keywordsContainer: {
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    gap: spacing.sm
  }
});
export default MovieScreen;
