import axios from 'axios';

const API = axios.create({
  baseURL: 'https://infobackend-eight.vercel.app/api/',
});

export default API;
