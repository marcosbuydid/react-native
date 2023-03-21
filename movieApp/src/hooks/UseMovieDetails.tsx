import { useEffect, useState } from 'react';
import movieDB from '../api/MovieDB';
import { FullMovieDetails } from '../interfaces/MovieInterface';
import { Cast, MovieCreditsResponse } from '../interfaces/CreditsInterface';


interface MovieDetails {
    isLoading: boolean;
    fullMovieDetails?: FullMovieDetails;
    cast: Cast[];
}

export const UseMovieDetails = (movieId: number) => {

    const [movieDetails, setMovieDetails] = useState<MovieDetails>({
        isLoading: true,
        fullMovieDetails: undefined,
        cast: [],
    });

    const getMovieDetails = async () => {
        const movieDetailPromise = movieDB.get<FullMovieDetails>(`/${movieId}`);
        const movieCastPromise = movieDB.get<MovieCreditsResponse>(`/${movieId}/credits`);
        const [movieDetailResponse, castPromiseResponse] = await Promise.all([movieDetailPromise, movieCastPromise])

        setMovieDetails({
            isLoading: false,
            fullMovieDetails: movieDetailResponse.data,
            cast: castPromiseResponse.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        //we return the complete state
        ...movieDetails
    }

}
