import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].profile;

export const fetchBio = (username) => {
  return axios.get(`${userUrl}/fetchbio?username=${username}`)
    .then((response) => response.data);
};

export const useShowBio = (username) => {
  return useQuery(['bio', username], () => fetchBio(username));
};