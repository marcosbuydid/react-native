import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const baseURL = 'http://192.168.1.6:8080/api';

const productApi = axios.create({ baseURL });

//axios middleware
//any petition made in the app,
//async storage will put the token in it.
productApi.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            //backend has x-token in one of the headers
            config.headers['x-token'] = token;
        }
        return config;
    }
);

export default productApi;