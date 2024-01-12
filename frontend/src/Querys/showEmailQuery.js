import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].auth;

export const fetchEmail = (username) => {
  return axios.get(`${userUrl}/fetchemail?username=${username}`)
    .then((response) => response.data);
};

export const useShowEmail = (username) => {
  return useQuery(['email', username], () => fetchEmail(username), {
    enabled: !!username,
  }); 
};