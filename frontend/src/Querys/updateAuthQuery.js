import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].auth;

export default function useUpdateAuth () {
  const queryClient = useQueryClient();

  return useMutation(
    async (authUpdateData) => {
        const response = await axios.put(`${userUrl}/updateauthprofile`, authUpdateData);
        
        return response.data;
    },
    {
      throwOnError: false,
      onMutate: (variables) => {
        const previousData = queryClient.getQueryData('updatedUser');
        return previousData;
      },
      onSuccess: () => {
        queryClient.invalidateQueries('updatedUser'); 
      },
      onError: (error, variables, previousData) => {
        queryClient.setQueryData('updatedUser', previousData);
        toast.error(
          `Error updating auth: ${error.message}`
        );
      },
    },
  );
};
