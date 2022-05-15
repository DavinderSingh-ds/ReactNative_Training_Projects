import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'http://75c2-2409-4055-716-8a69-6568-43e8-e52e-8c45.ngrok.io'
});

instance.interceptors.request.use(
    async (config)=> {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    },

    (err)=> {
        return Promise.reject(err);
    }
);

export default instance;