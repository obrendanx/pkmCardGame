import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
const backendURL = config[environment].backend;

export default function useLogin () {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ username, password }) => {
      try {
        const response = await axios.post(`${backendURL}/user/login`, {
          username,
          password,
        });

        return await response.data;
      } catch (error) {
        throw error
      }
    },
    {
      throwOnError: false,
      onSuccess: () => {
        queryClient.invalidateQueries('login'); 
      },
    },
  );
};
