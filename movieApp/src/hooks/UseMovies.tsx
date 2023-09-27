import { useEffect, useState } from 'react';
import movieDB from '../api/MovieDB';
import { Movie, MovieDBResponse } from '../interfaces/MovieInterface';

interface CinemaMovieTags {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}


export const UseMovies = () => {

    const [isLoading, setisLoading] = useState(true);
    const [cinemaMovieTags, setCinemaMovieTags] = useState<CinemaMovieTags>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })

    const getMovies = async () => {
        const nowPlayingMoviesPromise = movieDB.get<MovieDBResponse>('/now_playing');
        const popularMoviesPromise = movieDB.get<MovieDBResponse>('/popular');
        const topRatedMoviesPromise = movieDB.get<MovieDBResponse>('/top_rated');
        const upcomingMoviesPromise = movieDB.get<MovieDBResponse>('/upcoming');

        //this is the way to make multiple petitions simultaneously
        const response = await Promise.all([
            nowPlayingMoviesPromise,
            popularMoviesPromise,
            topRatedMoviesPromise,
            upcomingMoviesPromise
        ])

        setCinemaMovieTags({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,
        })

        setisLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        ...cinemaMovieTags,
        isLoading
    }

}