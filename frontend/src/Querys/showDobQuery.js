import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].profile;

export const fetchDob = (username) => {
  return axios.get(`${userUrl}/fetchdob?username=${username}`)
    .then((response) => response.data);
};

export const useShowDob = (username) => {
  return useQuery(['dob', username], () => fetchDob(username), {
    enabled: !!username,
  });
};