import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].user;

export default function useProfileSetup () {
  const queryClient = useQueryClient();

  return useMutation(
    async (profile) => {
      try {
        const response = await axios.post(`${userUrl}/userprofile`, profile);
        
        if(response) {
          window.location = './Login';
        }

        return await response.data;
      } catch (error) {
        if(error.response.status === 404) {
          throw new Error(`resource not found`);
        } else {
          throw new Error('An error has occurred');
        }
      }
    },
    {
      throwOnError: true,
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
      onError: (error) => { 
        toast.error(
          `Error registering: ${error.message}`,
        );
      },
    },
  );
};