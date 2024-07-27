import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const backendURL = config[environment].backend;

export default function useUpdateUser () {
  const queryClient = useQueryClient();

  return useMutation(
    async (userUpdateData) => {
        const response = await axios.post(`${backendURL}/user/updateprofile`, userUpdateData);
        
        toast.success("User updated successfully");
        return response;
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
          `Error updating user: ${error.message}`
        );
      },
    },
  );
};
