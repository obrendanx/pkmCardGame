import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { toast } from 'react-toastify';

const PrivateRoute = ({ path, children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    // User is not logged in, redirect to login page
    toast.error('Please log in to access this page');
    return <Navigate to="/login" replace />;
  }

  return <Route path={path}>{children}</Route>;
};

export default PrivateRoute;