import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

const environment = process.env.NODE_ENV || 'development';
const userUrl = config[environment].auth;

export default function useLogin () {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ username, password }) => {
      try {
        const response = await axios.post(`${userUrl}/login`, {
          username,
          password,
        });

        return await response.data;
      } catch (error) {
        if(error.response.status === 401){
          throw new Error("401 Incorrect username or password");
        } else if(error.response.status === 404){
          throw new Error("404 Incorrect username or password");
        } else{
          throw new Error("An error has occurred");
        }
      }
    },
    {
      throwOnError: true,
      onSuccess: () => {
        queryClient.invalidateQueries('login'); 
      },
      onError: (error) => {
        toast.error(
          `Error: ${error.message}`
        );
      },
    },
  );
};
