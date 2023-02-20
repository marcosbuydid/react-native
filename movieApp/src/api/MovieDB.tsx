import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '63821d892e33e65d2c68e98ad83c651c',
        language: 'en-EN'
    }
});

export default movieDB;