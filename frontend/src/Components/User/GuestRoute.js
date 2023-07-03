import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const GuestRoute = ({ isLoggedIn, redirect, children }) => {
  if (isLoggedIn) {
    return <Navigate to={redirect} replace />;
  }

  return <Route element={children} />;
};

export default GuestRoute;