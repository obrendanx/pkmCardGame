import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].profile;

export const fetchUser = async (userid) => {
    if (!userid) {
        throw new Error('userid is required');
    }
    console.log(`fetchUser userid: ${userid}`);
    const response = await axios.post(`https://localhost:7109/api/user/getuser`, {
        userId: userid
    });
    return response.data;
};

export const useShowUser = (userid) => {
    return useQuery(['user', userid], () => fetchUser(userid), {
        enabled: !!userid, 
    });
};