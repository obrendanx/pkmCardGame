import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const { token, userId } = getUserDataFromCookie();
    if (token && userId) {
      setIsLoggedIn(true);
      setUserId(userId);
    }
  }, []);

  // Utility function to get a specific cookie by name
  const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  };

  // Retrieve the user token and ID from the cookie
  const getUserDataFromCookie = () => {
    const token = getCookie('token');
    const userId = getCookie('userId');
    console.log('Token from cookie:', token);
    console.log('UserId from cookie:', userId);
    return { token, userId };
    };

  const login = (token, userId) => {
    setIsLoggedIn(true);
    setUserId(userId);

    // Set the user token and ID in the cookie
    const now = new Date();
    now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000); // Expires in 30 days
    document.cookie = `token=${token}; userId=${userId}; expires=${now.toUTCString()}; path='/'`;

    console.log('Cookie value after setting:', document.cookie);
    };

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null);

    // Remove the user token and ID from the cookie
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };

  // Pass the state and functions to the value prop of the context provider
  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};