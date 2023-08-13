import React, { useContext } from 'react';
import { AuthContext } from '../Components/User/AuthContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { isLoggedIn, username } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      {isLoggedIn ? (
        <div>
            <h2>Welcome {username}! You are logged in.</h2>
        </div>
      ) : (
        navigate('../login')
      )}
    </div>
  );
}

export default Home;