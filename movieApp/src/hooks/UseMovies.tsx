import { useEffect, useState } from 'react';
import movieDB from '../api/MovieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/MovieInterface';


export const UseMovies = () => {

    //we use this state because before the info is loaded nowPlayingMovies is undefined
    const [isLoading, setisLoading] = useState(true);
    const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([])

    const getMovies = async () => {
        const response = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setNowPlayingMovies(response.data.results)

        setisLoading(false);
    }

    useEffect(() => {
        getMovies();

    }, [])

    return { nowPlayingMovies, isLoading }

}