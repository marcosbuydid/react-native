import 'react-native-gesture-handler';
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/MovieInterface';
import { useNavigation } from '@react-navigation/native';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('DetailScreen', movie)}
            style={{
                width,
                height,
            }}>
            <View style={styles.imageContainer} >
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 20,
    },
    imageContainer: {
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 5
    }
})