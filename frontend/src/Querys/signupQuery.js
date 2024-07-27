import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const backendURL = config[environment].backend;

export default function useSignup () {
  const queryClient = useQueryClient();

  return useMutation(
    async (registered) => {
      try {
        const response = await axios.post(`${backendURL}/user/register`, registered);
        
        if(response) {
          window.location = './Login';
        }

        return await response;
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