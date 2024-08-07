import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const backendURL = config[environment].backend;

export const fetchProfile = async (userid) => {
    if (!userid) {
        throw new Error('userid is required');
    }
    console.log(`fetchProfile userid: ${userid}`);
    const response = await axios.post(`${backendURL}/user/getprofile`, {
        userId: userid
    });
    return response.data;
};

export const useShowProfile = (userid) => {
    return useQuery(['profile', userid], () => fetchProfile(userid), {
        enabled: !!userid, 
    });
};