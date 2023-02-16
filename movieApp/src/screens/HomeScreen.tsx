import 'react-native-gesture-handler';
import React from 'react'
import { ActivityIndicator, View, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { UseMovies } from '../hooks/UseMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {

    const { nowPlayingMovies, isLoading } = UseMovies();
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
        <View style={{ marginTop: top + 20 }}>
            <Carousel
                data={nowPlayingMovies}
                //item refers to all the movies that are playing now
                renderItem={({ item }: any) => <MoviePoster movie={item} />}
                sliderWidth={windowWidth}
                itemWidth={300}
            />
        </View>
    )
}