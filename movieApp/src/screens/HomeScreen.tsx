import 'react-native-gesture-handler';
import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { UseMovies } from '../hooks/UseMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {

    const { nowPlayingMovies, isLoading } = UseMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="blue" size={100} />
            </View>
        )
    }

    return (
        <View style={{ marginTop: top + 20 }}>
            <MoviePoster
                movie={nowPlayingMovies[0]}
            />

        </View>
    )
}