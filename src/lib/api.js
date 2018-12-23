import axios from 'axios';

export const getProducts = () => axios.get('/api/products');

export const getRankings = () => axios.get('api/rankings');