import React, { useContext } from 'react';
import { AuthContext } from '../Components/User/AuthContext';

function Home() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome! You are logged in.</h2>
      ) : (
        <h2>You are logged out. Please log in to access this page.</h2>
      )}
    </div>
  );
}

export default Home;