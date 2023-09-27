import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/MovieInterface'
import { MoviePoster } from './MoviePoster'

interface Props {
    title: string
    movies: Movie[]
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <View style={styles.image}>
                <FlatList
                    data={movies}
                    renderItem={({ item }: any) => <MoviePoster movie={item} width={120} height={160} />}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => {
                        return (
                            <View
                                style={{
                                    height: "100%",
                                    width: 10,
                                }}
                            />
                        );
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },

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
