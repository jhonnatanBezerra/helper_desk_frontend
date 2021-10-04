import axios from 'axios';


export const Api = axios.create({
  baseURL: 'http://10.1.1.20:8888/?action='
});

Api.interceptors.request.use((config) => {
  config.url = 'http://10.1.1.20:8888/?action=' + config.url;
  return config;
}, err => {
  console.log('erro no interceptor -> ', err);
})
