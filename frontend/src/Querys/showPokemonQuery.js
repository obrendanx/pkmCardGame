import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].profile;

export const fetchPokemon = (username) => {
  return axios.get(`${userUrl}/fetchpokemon?username=${username}`)
    .then((response) => response.data);
};

export const useShowPokemon = (username) => {
  return useQuery(['pokemon', username], () => fetchPokemon(username), {
    enabled: !!username,
  }); 
};