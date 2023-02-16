import 'react-native-gesture-handler';
import React from 'react'
import { ActivityIndicator, View, Dimensions, FlatList, Text, ScrollView } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { UseMovies } from '../hooks/UseMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = UseMovies();
    const { top } = useSafeAreaInsets();

    const { width: windowWidth } = Dimensions.get('window');

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="blue" size={100} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 10 }}>
                <View style={{ height: 450 }}>
                    <Carousel
                        data={nowPlaying}
                        //item refers to all the movies that are playing now
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                    />
                </View>
                <HorizontalSlider title={'On Cinema'} movies={nowPlaying} />
                <HorizontalSlider title={'Populars'} movies={popular} />
                <HorizontalSlider title={'Top Rated'} movies={topRated} />
                <HorizontalSlider title={'Upcoming'} movies={upcoming} />
            </View>
        </ScrollView>
    )
}