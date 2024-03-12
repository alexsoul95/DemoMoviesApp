import {View, Text, ScrollView, StyleSheet, FlatList, Animated, Alert} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParams} from '../../navigators/MainNavigator';
import AppText from '../../components/AppText';
import AppHeader from '../../components/AppHeader';
import {CastEdge} from '../../types/types';
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
import { useStore } from '../../store';
import LoadingIndicator from '../../components/LoadingIndicator';
import { styles } from './styles';

type Props = StackScreenProps<MainStackParams, 'MovieScreen'>;

const MovieScreen = ({navigation, route}: Props) => {

  const {id} = route.params;
  // Animation Header
  const yOffset = useRef(new Animated.Value(0)).current;
  const headerOpacity = yOffset.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  // Store Actions and States
  const {getMovie, LOADING, error, data} = useStore(state => state.movie)
  
  const name = data?.short?.name
  const image = data?.short?.image
  const description = data?.short?.description
  const actor = data?.short?.aggregateRating
  const aggregateRating = data?.short?.aggregateRating
  const datePublished = data?.short?.datePublished
  const genre = data?.short?.genre
  const keywords = data?.short?.keywords;
  const actorsData = data?.main?.cast?.edges;
  const reviewsData = data?.main?.featuredReviews?.edges;

  useEffect(() => {
    if (id) {
      getMovie(id)
    }
  }, [id]);

  useEffect(() => {
    if(error){
      Alert.alert(error)
    }
  }, [error])
  
  return (
    <ScreenWrapper>
      <Animated.View style={[styles.headerAbsolute, {opacity: headerOpacity}]}>
        <AppHeader onBack={() => navigation.goBack()} title={''} chevron/>
      </Animated.View>
      {LOADING ? <LoadingIndicator color={'white'}/> :
      <Animated.ScrollView 
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: yOffset,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
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
             {datePublished && <AppText>{`(${datePublished?.split('-')[0]})`}</AppText>}
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
          {/*Description + Keywords */}
          {description && 
          <View style={{gap: spacing.md}}>
            <AppText size='title'>{'Storyline'}</AppText>
            <AppText>{description}</AppText>
            <View style={styles.keywordsContainer}>
              {keywords?.split(',')?.map(item => <KeywordItem key={item} text={item} />)}
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
      </Animated.ScrollView>}
    </ScreenWrapper>
  );
};

export default MovieScreen;
