import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, View, Dimensions, FlatList, Text, ScrollView } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { UseMovies } from '../hooks/UseMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { GetImageColors } from '../helpers/GetImageColors';
import { GradientContext } from '../context/GradientContext';


export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = UseMovies();
    const { top } = useSafeAreaInsets();
    const { width: windowWidth } = Dimensions.get('window');
    const { setMainColors } = useContext(GradientContext)

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const [primaryColor = 'green', secondaryColor = 'orange'] = await GetImageColors(uri);
        setMainColors({ primaryColor, secondaryColor })
    }

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0)
        }
    }, [nowPlaying])


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="blue" size={100} />
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 10 }}>
                    <View style={{ height: 450 }}>
                        <Carousel
                            data={nowPlaying}
                            //item refers to all the movies that are playing now
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColors(index)}
                        />
                    </View>
                    <HorizontalSlider title={'Populars'} movies={popular} />
                    <HorizontalSlider title={'Top Rated'} movies={topRated} />
                    <HorizontalSlider title={'Upcoming'} movies={upcoming} />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}