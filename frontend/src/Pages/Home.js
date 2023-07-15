import React, { useContext } from 'react';
import { AuthContext } from '../Components/User/AuthContext';
import Button from '../Components/Form/Buttons/Button';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navigation/Navbar';

function Home() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/logout');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
            <Navbar/>
            <h2>Welcome! You are logged in.</h2>
            <Button text="Logout" handleClick={handleLogoutClick}>Logout</Button>
        </div>
      ) : (
        <h2>You are logged out. Please log in to access this page.</h2>
      )}
    </div>
  );
}

export default Home;