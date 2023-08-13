import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const tokenCookie = getCookie('token');
    if (tokenCookie) {
      const tokenPayloadString = decodeURIComponent(tokenCookie);
      try {
        const tokenPayload = JSON.parse(tokenPayloadString);
        setIsLoggedIn(true);
        setUserId(tokenPayload.userId);
        setUsername(tokenPayload.username);
      } catch (error) {
        console.error('Error parsing token payload:', error);
      }
    }
  }, [username, isLoggedIn, userId]);

  // Utility function to get a specific cookie by name
  const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  };

 const login = (token, userId, username) => {
    setIsLoggedIn(true);
    setUserId(userId);
    setUsername(username);

    // Create the token payload with user information
    const tokenPayload = {
      token,
      userId,
      username,
    };

    // Convert the token payload to a JSON string
    const tokenPayloadString = JSON.stringify(tokenPayload);

    // Set the user token in the cookie
    const now = new Date();
    now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000); // Expires in 30 days
    document.cookie = `token=${encodeURIComponent(tokenPayloadString)}; expires=${now.toUTCString()}; path='/'`;

    console.log('Cookie value after setting:', document.cookie);
  }; 

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null);

    // Remove the user token from the cookie
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };

  // Pass the state and functions to the value prop of the context provider
  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};