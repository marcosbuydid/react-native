import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/CreditsInterface';
import { FullMovieDetails } from '../interfaces/MovieInterface';
import currencyFormatter from 'currency-formatter';
import { MovieCast } from './MovieCast';

interface Props {
    fullMovieDetails: FullMovieDetails;
    cast: Cast[]
}

export const MovieDetails = ({ fullMovieDetails, cast }: Props) => {
    return (
        <>
            <View style={{ marginLeft: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text> {fullMovieDetails.vote_average}</Text>
                    <Text> - {fullMovieDetails.genres.map(g => g.name).join(', ')}</Text>
                </View>
                <Text style={styles.title}>
                    History
                </Text>
                <Text style={styles.detailsTitle}>
                    {fullMovieDetails.overview}
                </Text>
                <Text style={styles.budgetTitle}>
                    Budget
                </Text>
                <Text style={styles.budget}>
                    {currencyFormatter.format(fullMovieDetails.budget, { code: 'USD' })}
                </Text>
            </View>
            <View style={styles.actorsContainer}>
                <Text style={styles.actorsTitle}>
                    Actors
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <MovieCast actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        marginTop: 10,
        fontWeight: 'bold',
        color: 'black'
    },

    detailsTitle: {
        fontSize: 15,
        marginBottom: 10,
        color: 'gray'
    },

    budgetTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },

    budget: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey',
        marginBottom: 10
    },

    actorsContainer: {
        marginLeft: 5,
        marginBottom: 40,
    },

    actorsTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
})
