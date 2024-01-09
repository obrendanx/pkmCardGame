import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].auth;

export const fetchFullname = (username) => {
  return axios.get(`${userUrl}/fetchfullname?username=${username}`)
    .then((response) => response.data);
};

export const useShowFullname = (username) => {
  return useQuery(['fullname', username], () => fetchFullname(username));
};