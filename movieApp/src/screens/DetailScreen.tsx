import 'react-native-gesture-handler';
import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigators/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { UseMovieDetails } from '../hooks/UseMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route, navigation }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const { isLoading, fullMovieDetails, cast } = UseMovieDetails(movie.id)

    UseMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer} >
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>

            <View style={styles.marginContainer} >
                <Text style={styles.title}>{movie.original_title}</Text>
            </View>

            <View style={styles.marginContainer} >
                {isLoading ? <ActivityIndicator color="blue" size={100} />
                    : <MovieDetails
                        fullMovieDetails={fullMovieDetails!}
                        cast={cast}
                    />}
            </View>

            <View style={styles.backButton}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        color="white"
                        name="arrow-back-outline"
                        size={40}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 5
    },

    marginContainer: {
        marginTop: 5,
        marginHorizontal: 5,
        marginLeft: 10
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 5
    },

    backButton: {
        position: 'absolute',
        marginLeft: 10,
        marginTop: 10
    }
})