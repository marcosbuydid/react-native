import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import movieDB from '../api/MovieDB';
import { MovieDBNowPlaying } from '../interfaces/MovieInterface';

export const HomeScreen = () => {

    useEffect(() => {
        movieDB.get<MovieDBNowPlaying>('/now_playing')
            .then(response => { console.log(response.data.results[0].title) });
    }, [])


    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}