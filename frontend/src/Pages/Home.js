import React, { useContext } from 'react';
import { AuthContext } from '../Components/User/AuthContext';
import Button from '../Components/Form/Buttons/Button';
import { useNavigate } from 'react-router-dom';

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
            <h2>Welcome! You are logged in.</h2>
            <Button text="Logout" handleClick={handleLogoutClick}>Logout</Button>
        </div>
      ) : (
        navigate('../login')
      )}
    </div>
  );
}

export default Home;