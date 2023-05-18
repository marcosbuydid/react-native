import axios from "axios";

const baseURL = 'http://192.168.1.6:8080/api';

const productApi = axios.create({ baseURL });

export default productApi;