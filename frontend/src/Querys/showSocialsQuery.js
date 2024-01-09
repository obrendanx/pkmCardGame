import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].profile;

export const fetchSocials = (username) => {
  return axios.get(`${userUrl}/fetchsocials?username=${username}`)
    .then((response) => response.data);
};

export const useShowSocials = (username) => {
  return useQuery(['socials', username], () => fetchSocials(username));
};