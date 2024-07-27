import React, { useContext } from 'react';
import { AuthContext } from '../Components/User/AuthContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Navigation/Sidebar';

function Home() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      {isLoggedIn ? (
        <div>
            <Sidebar/>
        </div>
      ) : (
        navigate('../login')
      )}
    </div>
  );
}

export default Home;